import * as React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Pie } from "./components/Pie";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <div style={{ height: "100vh" }}>
          <h2>Portfolio allocations</h2>
          <Pie />
          <h2>Stocks profitability</h2>
          <Pie />
        </div>
      </Grid>
    </Box>
  </ChakraProvider>
);
