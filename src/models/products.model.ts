// @ts-nocheck

import { action, thunk } from "easy-peasy";
import { database } from "../services/database";

export const productsModel = {
  products: [],
  setProducts: action((state, payload) => {
    state.products = payload;
  }),
  fetchProducts: thunk(async (actions, payload, helpers) => {
    try {
      const { user } = helpers.getState();
      const ref = database.ref(`users/${user}/products`);
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
  selectedProfileProducts: [],
  setSelectedProfileProducts: action((state, payload) => {
    state.selectedProfileProducts = payload;
  }),
  fetchSelectedProfileProducts: thunk(async (actions, payload, helpers) => {
    try {
      const { selectedProfile } = helpers.getState();
      if (selectedProfile) {
        const ref = database.ref(`users/${selectedProfile}/products`);
        ref.on("value", (snapshot) => {
          const data = snapshot.val();
          actions.setSelectedProfileProducts(data);
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: products.model.ts ~ line 39 ~ fetchSelectedProfileProducts:thunk ~ error",
        error
      );
    }
  }),
};
