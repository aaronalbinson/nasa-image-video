import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import getAsset from "../../../api/asset";

class Asset extends React.Component {
  componentDidMount() {
    this.loadAssetData();
  }

  loadAssetData() {
    console.log(this.props.location.pathname);
    getAsset(this.props.location.pathname).then(response => {
      const data = response;
      console.log(data);
      this.setState({ assetData: data });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Grid container className="asset" spacing={24}>
          <Grid item>Asset Name</Grid>
          <Grid item>Asset Image</Grid>
          <Grid item>Asset full desc</Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

Asset.propTypes = {
  location: PropTypes.object
};

export default withRouter(Asset);
