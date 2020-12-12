import { useState } from "react";
import { STOCKS } from "../constants";
import { ChartsGroup, AssetClassSelector } from "../components";

export const Charts = () => {
  const [selectedAssetClass, setSelectedAssetClass] = useState(STOCKS);
  const handleAssetClassSelectionButton = (e: any) => {
    return setSelectedAssetClass(e.target.innerText);
  };

  return (
    <section>
      <AssetClassSelector event={handleAssetClassSelectionButton} />
      <ChartsGroup label={selectedAssetClass} />
    </section>
  );
};
