import bannerData from "../data/banner.json";

import { createBanner, createCategoriesCards } from "./htmlHelper";
import { getCategories } from "./itemsDataHelper";

createBanner(bannerData);

let categories = getCategories();
createCategoriesCards(categories);
