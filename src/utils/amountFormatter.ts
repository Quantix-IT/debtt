import currency from 'currency.js'

export const amountFormatter = (val: number): string =>
  currency(val, { symbol: '', separator: '', decimal: '.' }).format()

export default amountFormatter
