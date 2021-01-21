// @ts-nocheck

import { useStoreActions } from "easy-peasy";
import { ChartsGroup, AssetClassSelector } from "../components";

export const Charts = () => {
  const selectAssetClass = useStoreActions(
    (actions) => actions.selectAssetClass
  );
  const handleAssetClassSelectionButton = (e: any) =>
    selectAssetClass(e.target.innerText);

  return (
    <section>
      <AssetClassSelector event={handleAssetClassSelectionButton} />
      <ChartsGroup />
    </section>
  );
};
