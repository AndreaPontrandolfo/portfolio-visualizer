import { createStore } from "easy-peasy";
import { productsModel } from "./models/products.model";

export const store = createStore(productsModel);
