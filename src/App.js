import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import search from "../src/api/search";
import SearchField from "../src/components/generic/SearchField";
import theme from "./styles/theme";

require("./App.css");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "moon"
    };
  }

  componentDidMount() {
    this.loadSearchData();
  }

  loadSearchData() {
    search(this.state.searchQuery);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <SearchField />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
