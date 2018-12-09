import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import SearchForm from "../src/components/generic/SearchForm";
import theme from "./styles/theme";

require("./App.css");

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <SearchForm />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
