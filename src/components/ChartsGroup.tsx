// @ts-nocheck

import { Box, Flex } from "@chakra-ui/react";
import { useStoreState } from "easy-peasy";
import { filter } from "ramda";
import { hasData } from "ramda-addons";
import { getSingularLabel } from "../utils";
import { Pie, Bar } from "../components";

export const ChartsGroup = () => {
  const selectedAssetClass = useStoreState((state) => state.selectedAssetClass);
  const products = useStoreState((state) => state.products);
  const selectedProfile = useStoreState((state) => state.selectedProfile);
  const selectedProfileProducts = useStoreState(
    (state) => state.selectedProfileProducts
  );
  const currentProfileProducts = selectedProfile
    ? selectedProfileProducts
    : products;
  const matchProductsBySelectedAssetClass = (product) => {
    return product.type === getSingularLabel(selectedAssetClass) && product.PMC;
  };
  const productsToShow = hasData(currentProfileProducts)
    ? filter(matchProductsBySelectedAssetClass, currentProfileProducts)
    : [];

  return (
    <Flex>
      <Box h="90vh" w="100%">
        <h2>{selectedAssetClass} allocations</h2>
        <Pie productsToShow={productsToShow} />
      </Box>
      <Box h="90vh" w="100%">
        <h2>{selectedAssetClass} profitability</h2>
        <Bar productsToShow={productsToShow} />
      </Box>
    </Flex>
  );
};
