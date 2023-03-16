const { createCategoryItems } = require("./htmlHelper");
const { getCategoryItems } = require("./itemsDataHelper");

let params = new URLSearchParams(location.search);
let categoryName = params.get("name");

const items = getCategoryItems(categoryName);
createCategoryItems(items);
