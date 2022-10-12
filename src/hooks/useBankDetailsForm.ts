import { useEffect } from 'react'
import { joiResolver } from '@hookform/resolvers/joi'
import { useForm } from 'react-hook-form'
import { BankDetailsInputs, BankDetailsSchema } from '../validations'
import { BankDetailsForm, BankDetailsFormProps } from '../interfaces'

export default function useBankDetailsForm({
  countryData,
  isCompanyAccount,
  onComplete,
}: BankDetailsFormProps): BankDetailsForm {
  const {
    handleSubmit,
    formState: { errors: bankDetailsFormErrors },
    control: bankDetailsFormControl,
    formState: bankDetailsFormState,
    setValue,
    getValues: getFieldValue,
  } = useForm<BankDetailsInputs>({
    mode: 'all',
    resolver: joiResolver(
      BankDetailsSchema(
        countryData?.routing_number_1?.label,
        countryData?.routing_number_2?.label,
        countryData?.routing_number_1?.pattern?.max,
        countryData?.routing_number_1?.pattern?.min,
        countryData?.routing_number_2?.pattern?.max,
        countryData?.routing_number_2?.pattern?.min,
        countryData?.account_number?.pattern?.regex,
        countryData?.account_number?.label,
        isCompanyAccount,
      ),
    ),
  })

  useEffect(() => {
    const routingFullNumber = countryData?.routing_number?.value
    if (routingFullNumber?.length) {
      const routing1 = routingFullNumber.split('_')[0]
      const routing2 = routingFullNumber.split('_')[1]
      if (routing1?.length) {
        setValue('routingNumber1', routing1)
        setValue('routingNumber2', routing2)
      } else {
        setValue('routingNumber1', routingFullNumber)
      }
    }
  }, [countryData, setValue])

  const submitBankDetailsForm = handleSubmit(async (data: BankDetailsInputs) => {
    let fullRoutingNumber
    if (data?.routingNumber1 && data?.routingNumber2) {
      fullRoutingNumber = data.routingNumber1 + '_' + data.routingNumber2
    } else if (data?.routingNumber1 && !data?.routingNumber2) {
      fullRoutingNumber = data.routingNumber1
    } else if (data?.routingNumber2 && !data?.routingNumber1) {
      fullRoutingNumber = data.routingNumber2
    } else {
      fullRoutingNumber = ''
    }
    if (onComplete) {
      await onComplete({
        routing_number: fullRoutingNumber,
        account_number: data.accountNumber ?? '',
        account_holder_first_name: data.accountOwnerFirstName ?? '',
        account_holder_last_name: data.accountOwnerLastName ?? '',
      })
    }
  })

  return {
    bankDetailsFormErrors,
    bankDetailsFormControl,
    bankDetailsFormState,
    setValue,
    getFieldValue,
    submitBankDetailsForm,
  }
}
