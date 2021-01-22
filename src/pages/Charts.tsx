// @ts-nocheck

import { HStack } from "@chakra-ui/react";
import { useStoreActions } from "easy-peasy";
import {
  ChartsGroup,
  AssetClassSelector,
  ProfileSelectionSelect,
} from "../components";

export const Charts = () => {
  const selectAssetClass = useStoreActions(
    (actions) => actions.selectAssetClass
  );
  const handleAssetClassSelectionButton = (e: any) =>
    selectAssetClass(e.target.innerText);

  return (
    <section>
      <HStack justifyContent="center">
        <ProfileSelectionSelect />
        <AssetClassSelector event={handleAssetClassSelectionButton} />
      </HStack>
      <ChartsGroup />
    </section>
  );
};
