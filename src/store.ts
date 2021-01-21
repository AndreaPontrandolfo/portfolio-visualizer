import { createStore } from "easy-peasy";
import { productsModel } from "./models/products.model";
import { assetClassModel } from "./models/assetClass.model";
import { userModel } from "./models/user.model";

export const store = createStore({
  ...productsModel,
  ...assetClassModel,
  ...userModel,
});
