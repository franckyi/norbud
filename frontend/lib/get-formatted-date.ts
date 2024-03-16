function getFormattedDate(string: string) {
  return string.replace(/(\d{4})(\d{2})(\d{2})/, "$1/$2/$3");
}

export default getFormattedDate;
