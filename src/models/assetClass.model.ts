// @ts-nocheck

import { action } from "easy-peasy";
import { STOCK } from "../constants";

const defaultSelectedAssetClass = STOCK;

export const assetClassModel = {
  selectedAssetClass: defaultSelectedAssetClass,
  selectAssetClass: action((state, payload) => {
    state.selectedAssetClass = payload;
  }),
};
