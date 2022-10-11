import Joi from 'joi'

export const BankDetailsSchema = (
  firstRoutingNumberLabel?: string,
  secondRoutingNumberLabel?: string,
  firstRoutingMax?: number,
  firstRoutingMin?: number,
  secondRoutingMax?: number,
  secondRoutingMin?: number,
  accountNumberRegex?: string,
  accountNumberLabel?: string,
) => {
  const pattern = accountNumberRegex && new RegExp(accountNumberRegex.slice(1, -1), 'g')
  return {
    accountOwnerFirstName: Joi.string().label('Account Owner First Name').required(),
    accountOwnerLastName: Joi.string().label('Account Owner Last Name').required(),
    routingNumber1:
      firstRoutingNumberLabel && firstRoutingMin && firstRoutingMax
        ? Joi.string().label(firstRoutingNumberLabel).required().max(firstRoutingMax).min(firstRoutingMin)
        : Joi.string().optional().allow(''),
    routingNumber2:
      secondRoutingNumberLabel && secondRoutingMin && secondRoutingMax
        ? Joi.string().label(secondRoutingNumberLabel).required().max(secondRoutingMax).min(secondRoutingMin)
        : Joi.string().optional().allow(''),
    accountNumber:
      accountNumberLabel && pattern
        ? Joi.string().pattern(pattern).label(accountNumberLabel).required()
        : accountNumberLabel && Joi.string().label(accountNumberLabel).required(),
  }
}
