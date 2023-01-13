import format from 'date-fns/format'

export const dateFormatter = (date: Date): string => format(date, 'dd-MM-yyyy')

export default dateFormatter
