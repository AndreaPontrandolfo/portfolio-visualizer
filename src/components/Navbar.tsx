import { Link, List, ListItem, Box } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as ReactRouterLink,
} from "react-router-dom";
import { Charts, PortfolioEditor } from "../pages";

export const Navbar = (childs: any) => {
  const { ColorModeSwitcher } = childs;

  return (
    <Router>
      <Box w="100%">
        <nav>
          <List display="flex" alignItems="center" justifyContent="flex-end">
            <ListItem>
              <Link as={ReactRouterLink} to="/">
                Charts
              </Link>
            </ListItem>
            <ListItem ml="1%">
              <Link as={ReactRouterLink} to="/portfolio-editor">
                Portfolio Editor
              </Link>
            </ListItem>
            <ListItem ml="0.5%">
              <ColorModeSwitcher />
            </ListItem>
          </List>
        </nav>

        <Switch>
          <Route path="/portfolio-editor">
            <PortfolioEditor />
          </Route>
          <Route path="/">
            <Charts />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
};
