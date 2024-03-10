/**
 * Converts a timestamp to a formatted date string.
 *
 * @param timestamp - The timestamp to convert.
 * @returns The formatted date string.
 */
export const timestampToDate = (timestamp: string) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
};
