import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import search from "../../../api/search";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.loadSearchData = this.loadSearchData.bind(this);
  }

  handleChange(event) {
    const query = event.target.value;
    this.setState({ searchValue: query });
  }

  loadSearchData() {
    search(this.state.searchValue);
  }
  render() {
    return (
      <React.Fragment>
        <TextField
          label="Search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SvgIcon>
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </SvgIcon>
              </InputAdornment>
            )
          }}
          onChange={this.handleChange}
        />
        <Button onClick={this.loadSearchData}>Search</Button>
      </React.Fragment>
    );
  }
}

export default SearchForm;
