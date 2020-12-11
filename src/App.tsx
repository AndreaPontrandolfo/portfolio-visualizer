import { useState } from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { ChartsGroup, AssetClassSelector } from "./components";
import { STOCKS } from "./constants";

export const App = () => {
  const [selectedAssetClass, setSelectedAssetClass] = useState(STOCKS);
  const handleAssetClassSelectionButton = (e: any) => {
    return setSelectedAssetClass(e.target.innerText);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Box justifySelf="flex-end">
            <AssetClassSelector event={handleAssetClassSelectionButton} />
            <ColorModeSwitcher />
          </Box>
          <ChartsGroup label={selectedAssetClass} />
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
