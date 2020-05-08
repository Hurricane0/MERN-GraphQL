import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Phonebook from "./pages/Phonebook";
import NotFound from "./components/NotFound";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Layout from "./components/Layout";
import theme from "./components/theme";
import Homepage from "./pages/Homepage";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "/graphql",
  }),
});
const App: React.FC = () => (
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact={true} component={Homepage} />
            <Route path="/phonebook" component={Phonebook} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </MuiThemeProvider>
  </ApolloProvider>
);

export default App;
