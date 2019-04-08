import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SvgIcon from "@material-ui/core/SvgIcon";
import "./searchForm.css";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      error: ""
    };
    this.handleButtonClicked = this.handleButtonClicked.bind(this);
  }

  handleButtonClicked(event) {
    this.props.buttonClicked(event);
  }

  render() {
    return (
      <Grid
        className="searchForm"
        container
        justify="center"
        alignItems="center"
        spacing={24}
      >
        <Grid item>
          <TextField onChange={this.props.handleChange} />
        </Grid>
        <Grid item>
          <Button
            onClick={this.handleButtonClicked}
            variant="contained"
            color="primary"
          >
            <SvgIcon>
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </SvgIcon>
            Search
          </Button>
        </Grid>
      </Grid>
    );
  }
}

SearchForm.propTypes = {
  buttonClicked: PropTypes.func,
  handleChange: PropTypes.func
};

export default SearchForm;
