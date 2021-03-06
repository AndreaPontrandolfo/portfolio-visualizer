// @ts-nocheck

import { useEffect } from "react";
import { Grid } from "@chakra-ui/react";
import { useStoreActions } from "easy-peasy";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Navbar } from "./components";

export const AuthenticatedApp = () => {
  const fetchProducts = useStoreActions((actions) => actions.fetchProducts);
  const fetchSelectedProfileProducts = useStoreActions(
    (actions) => actions.fetchSelectedProfileProducts
  );
  const childs = {
    ColorModeSwitcher,
  };

  useEffect(() => {
    fetchProducts();
    fetchSelectedProfileProducts();
  }, [fetchProducts, fetchSelectedProfileProducts]);

  return (
    <Grid minH="100vh" p={3}>
      <Navbar {...childs} />
    </Grid>
  );
};
