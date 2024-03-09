function filterCategories(data, category: string) {
  return data.filter((item) => item.acf.category[category]);
}

export default filterCategories;
