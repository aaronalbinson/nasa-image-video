import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import { withRouter } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import SearchForm from "../src/components/generic/SearchForm";
import AssetGrid from "../src/components/generic/AssetGrid";
import Asset from "../src/components/generic/Asset";
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
          <Grid container spacing={24}>
            <Grid xs={12} item className="appTitle">
              <Typography variant="h2">NASA Assets Library Search</Typography>
            </Grid>
            <Switch>
              <Redirect exact from="/" to="search" />
              <Route
                exact
                path="/search"
                render={() => (
                  <React.Fragment>
                    <Grid item xs={12}>
                      <SearchForm
                        handleChange={this.handleChange}
                        buttonClicked={() => this.loadSearchData()}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <AssetGrid data={this.state.searchResult} />
                    </Grid>
                  </React.Fragment>
                )}
              />
              <Route path="/asset" render={() => <Asset />} />
            </Switch>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
