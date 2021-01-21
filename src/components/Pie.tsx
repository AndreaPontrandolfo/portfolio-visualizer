import { ResponsivePie } from "@nivo/pie";
import { normalizeNumber } from "../utils";

type PieSlice = {
  name: string;
  Position: string;
};

export const Pie = ({ productsToShow }: { productsToShow: [] }) => {
  const remodelProduct = (product: PieSlice) => {
    return {
      id: product.name,
      label: product.name,
      value: normalizeNumber(product.Position),
    };
  };
  const data = productsToShow.map(remodelProduct);

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: "nivo" }}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      radialLabelsTextColor="#333333"
      radialLabelsLinkColor={{ from: "color" }}
      sliceLabelsSkipAngle={10}
      sliceLabelsTextColor="#333333"
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};
