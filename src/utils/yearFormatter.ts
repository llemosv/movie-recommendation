export function getYearFromDate(dateString: string) {
  const dateParts = dateString.split('-');
  const year = dateParts[0];
  return year;
}
