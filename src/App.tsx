import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Navbar } from "./components";
import { getUser } from "./utils";

export const App = () => {
  // getUser();
  const childs = {
    ColorModeSwitcher,
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Navbar {...childs} />
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
