// @ts-nocheck

import { action, thunk } from "easy-peasy";
import { database } from "../services/database";

export const productsModel = {
  products: [],
  fetchProducts: thunk(async (actions, payload = "utente1") => {
    try {
      const ref = database.ref(`users/${payload}/products`);
      ref.on("value", (snapshot) => {
        const data = snapshot.val();
        actions.setProducts(data);
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: products.model.ts ~ line 17 ~ fetchProducts:thunk ~ error",
        error
      );
    }
  }),
  setProducts: action((state, payload) => {
    state.products = payload;
  }),
};
