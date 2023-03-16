import itemsData from "../data/items.json";

export function getCategories() {
  let categories = [];
  itemsData.items.forEach((item) => {
    let existingCategory = categories.find((x) => x.name === item.category);

    if (!existingCategory) {
      categories.push({
        name: item.category,
        minimumPrice: item.price,
        image: item.image,
      });
    } else if (existingCategory.minimumPrice > item.price) {
      existingCategory.minimumPrice = item.price;
    } else {
      existingCategory.image = item.image;
    }
  });

  return categories;
}

export function getCategoryItems(categoryName) {
  return itemsData.items.filter(
    (x) => x.category.toLowerCase() === categoryName.toLowerCase()
  );
}
