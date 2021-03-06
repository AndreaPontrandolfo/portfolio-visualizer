// @ts-nocheck

import { sort } from "ramda";
import { isNegative } from "ramda-adjunct";
import { ResponsiveBar } from "@nivo/bar";
import { normalizeNumber } from "../utils";

type BarUnit = {
  name: string;
  Position: string;
};

export const Bar = ({ productsToShow }: { productsToShow: [] }) => {
  const remodelProduct = (product: BarUnit) => {
    const profitto = normalizeNumber(
      `${(product.Quote - product.PMC) * product.Quantità}`
    );

    return {
      ticker: product.name,
      valore: normalizeNumber(product.Position) - profitto,
      valoreColor: "hsl(205, 77%, 75%)",
      profitto,
      profittoColor: isNegative(profitto)
        ? "hsl(0, 80%, 63%)"
        : "hsl(106, 82%, 57%)",
    };
  };
  const getProductWithHigherProfitto = (prevProduct, nextProduct) => {
    return nextProduct.profitto - prevProduct.profitto;
  };
  const products = productsToShow.map(remodelProduct);
  const sortedProductsByProfitto = sort(getProductWithHigherProfitto, products);

  return (
    <ResponsiveBar
      data={sortedProductsByProfitto}
      keys={["valore", "profitto"]}
      indexBy="ticker"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={({ id, data }) => data[`${id}Color`]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};
