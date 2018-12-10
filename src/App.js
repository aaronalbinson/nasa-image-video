import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import SearchForm from "../src/components/generic/SearchForm";
import AssetGrid from "../src/components/generic/AssetGrid";
import theme from "./styles/theme";
import search from "../src/api/search";

require("./App.css");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      searchResult: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.loadSearchData = this.loadSearchData.bind(this);
  }

  handleChange(event) {
    const query = event.target.value;
    this.setState({ searchValue: query });
  }

  loadSearchData() {
    search(this.state.searchValue).then(response => {
      const data = response;
      this.setState({ searchResult: data });
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <SearchForm
            handleChange={this.handleChange}
            buttonClicked={() => this.loadSearchData()}
          />
          <AssetGrid data={this.state.searchResult} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
