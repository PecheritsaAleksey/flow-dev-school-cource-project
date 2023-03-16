export function createBanner(banner) {
  const bannerDiv = document.getElementById("banner");
  const bannerImage = require(`../assets/${banner.image}`);

  bannerDiv.insertAdjacentHTML(
    "beforeend",
    `
          <img src="${bannerImage}" alt="banner" />
          <div class="banner-info">
              <p>${banner.title}</p>
              <a href="/category.html?name=iPhone"><button>Купить</button></a>
          </div>
      `
  );
}

export function createCategoriesCards(categories) {
  const categoriesContainer = document.getElementById("categories");
  let categoriesCards = categories.reduce((prev, category) => {
    const categoryImage = require(`../assets/${category.image}`);
    return (prev += `
        <div class="card">
            <a href="/category.html?name=${category.name}">
            <img src=${categoryImage} alt="" />
            <p>${category.name}</p>
            <p class="price">от ${category.minimumPrice}</p>
            </a>
        </div>
    `);
  }, "");
  categoriesContainer.insertAdjacentHTML("beforeend", categoriesCards);
}

export function createCategoryItems(categoryItems) {
  const itemsContainer = document.getElementById("items");
  let itemsCards = categoryItems.reduce((prev, item) => {
    const itemImage = require(`../assets/${item.image}`);
    return (prev += `
        <div class="card item">
            <img src=${itemImage} alt="" />
            <p>${item.name}</p>
            <p class="price">${item.price}</p>
            <button>В корзину</button>
        </div>
      `);
  }, "");
  itemsContainer.insertAdjacentHTML("beforeend", itemsCards);
}
