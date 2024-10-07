import ms from 'ms'

/**
 * Formats a given timestamp into a human-readable "time ago" string.
 *
 * @param timestamp - The date object representing the timestamp to format.
 * @param timeOnly - Optional flag to indicate if only the time difference should be returned without the "ago" suffix.
 * @returns A string representing the formatted time difference.
 *
 * @remarks
 * If the `timestamp` is not provided, the function returns 'never'.
 * The function calculates the difference between the current time and the provided timestamp.
 */
export const formatTimeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return 'never'

  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? '' : ' ago'
  }`
}
