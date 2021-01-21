// @ts-nocheck

import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { useStoreState } from "easy-peasy";
import { AuthenticatedApp } from "./AuthenticatedApp";
import { UnauthenticatedApp } from "./UnauthenticatedApp";

export const App = () => {
  const user = useStoreState((state) => state.user);
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </Box>
    </ChakraProvider>
  );
};
