/* eslint-disable @typescript-eslint/no-base-to-string */
// import moment from 'moment'

export enum NameRange {
  LastYear = 'Last Year',
  ThisYear = 'This Year',
  ThisMonth = 'This Month',
  ThisWeek = 'This Week',
}

/**
 * this function used to generate date range based on named range
 * @param nameRange enum NameRange
 * @returns dateRange { startDate: Date, endDate: Date }
 */
export const getDateRange = (
  nameRange: NameRange
): { startDate: Date; endDate: Date } => {
  const startDate = new Date()
  const endDate = new Date()
  return { startDate, endDate }
}
