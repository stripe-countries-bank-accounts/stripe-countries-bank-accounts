import { bankInfoObject } from '../bank-info-object'
import { Control, DeepMap, FieldError, FormState, UseFormGetValues, UseFormSetValue } from 'react-hook-form'
import { BankDetailsInputs } from '../validations'
import { BaseSyntheticEvent } from 'react'

export interface Result {
  routing_number: string
  account_number: string
  account_holder_first_name?: string
  account_holder_last_name?: string
}

export interface BankAccountProps {
  countryCode?: keyof typeof bankInfoObject
  businessType?: string
  onComplete?: (res: Result) => void
}

export interface BankDetailsForm {
  bankDetailsFormErrors: DeepMap<BankDetailsInputs, FieldError>
  bankDetailsFormControl: Control<BankDetailsInputs>
  getFieldValue: UseFormGetValues<BankDetailsInputs>
  bankDetailsFormState: FormState<BankDetailsInputs>
  setValue: UseFormSetValue<BankDetailsInputs>
  submitBankDetailsForm: (e?: BaseSyntheticEvent<Record<string, unknown>, any, any>) => Promise<void>
}

export interface BankDetailsFormProps {
  countryData: any
  isCompanyAccount: boolean
  onComplete?: (res: Result) => void
}
