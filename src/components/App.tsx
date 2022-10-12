import React from 'react'
import { Form, Input, Button } from 'antd'
import { Controller } from 'react-hook-form'
import { Label } from './styles'
import { bankInfoObject } from '../bank-info-object'
import { BusinessType } from '../enums'
import useBankDetailsForm from '../hooks/useBankDetailsForm'
import { BankAccountProps } from '../interfaces'

const CountryBankAccount = ({ countryCode, businessType, onComplete }: BankAccountProps) => {
  const countryData = countryCode && bankInfoObject[countryCode]

  const { bankDetailsFormControl, bankDetailsFormErrors, setValue, bankDetailsFormState, submitBankDetailsForm } =
    useBankDetailsForm(countryData, businessType === BusinessType.COMPANY, onComplete)
  return (
    <Form onFinish={() => submitBankDetailsForm()}>
      {businessType === BusinessType.COMPANY && (
        <Form.Item
          validateStatus={bankDetailsFormErrors?.['accountOwnerFirstName'] ? 'error' : ''}
          help={bankDetailsFormErrors.accountOwnerFirstName?.message}
        >
          <Label>
            Account Owner First Name <sup>*</sup>
          </Label>
          <Controller
            render={({ field }) => <Input type='text' {...field} />}
            name='accountOwnerFirstName'
            control={bankDetailsFormControl}
          />
        </Form.Item>
      )}
      {businessType === BusinessType.COMPANY && (
        <Form.Item
          validateStatus={bankDetailsFormErrors?.['accountOwnerLastName'] ? 'error' : ''}
          help={bankDetailsFormErrors.accountOwnerLastName?.message}
        >
          <Label>
            Account Owner Last Name <sup>*</sup>
          </Label>
          <Controller
            render={({ field }) => <Input type='text' {...field} />}
            name='accountOwnerLastName'
            control={bankDetailsFormControl}
          />
        </Form.Item>
      )}
      <Form.Item
        validateStatus={bankDetailsFormErrors?.['routingNumber1'] ? 'error' : ''}
        help={bankDetailsFormErrors.routingNumber1?.message}
      >
        <Label>
          <sup>*</sup>
        </Label>
        <Controller
          render={({ field }) => <Input {...field} placeholder={''} />}
          name='routingNumber1'
          control={bankDetailsFormControl}
        />
      </Form.Item>

      <Form.Item
        validateStatus={bankDetailsFormErrors?.['routingNumber2'] ? 'error' : ''}
        help={bankDetailsFormErrors.routingNumber2?.message}
      >
        <Label>
          <sup>*</sup>
        </Label>
        <Controller
          render={({ field }) => <Input {...field} placeholder={''} />}
          name='routingNumber2'
          control={bankDetailsFormControl}
        />
      </Form.Item>
      <Form.Item
        validateStatus={bankDetailsFormErrors?.['accountNumber'] ? 'error' : ''}
        help={bankDetailsFormErrors.accountNumber?.message}
      >
        <Label>
          <sup>*</sup>
        </Label>
        <Controller
          render={({ field }) => (
            <Input
              {...field}
              onChange={(e) => {
                setValue('accountNumber', e.target.value.replace(/\s/g, ''))
              }}
              placeholder={''}
            />
          )}
          name='accountNumber'
          control={bankDetailsFormControl}
        />
      </Form.Item>
      <Button
        type='primary'
        htmlType='submit'
        disabled={!bankDetailsFormState.isDirty || !bankDetailsFormState.isValid}
      >
        Submit
      </Button>
    </Form>
  )
}

export default CountryBankAccount
