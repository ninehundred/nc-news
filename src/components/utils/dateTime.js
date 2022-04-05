export const convertToLocal = (created_at, timezone) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZoneName: 'short',
    hourCycle: 'h24'
  };
  return new Date(created_at).toLocaleTimeString(timezone, options)
}