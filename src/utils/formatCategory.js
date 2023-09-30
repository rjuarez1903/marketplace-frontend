export const formatCategory = (category) => {
  return category.charAt(0).toUpperCase() + category.replace("-", " ").slice(1);
};
