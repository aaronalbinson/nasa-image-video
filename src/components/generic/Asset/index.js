import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import getAsset from "../../../api/asset";
import getAssetMeta from "../../../api/assetMeta";
import "./asset.css";

class Asset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assetImageData: "",
      assetData: "",
      assetid: ""
    };
  }
  componentDidMount() {
    this.loadAssetData();
  }

  loadAssetData() {
    const assetid = this.props.location.pathname.split("/").pop();
    this.setState({ assetid });
    getAsset(assetid).then(response => {
      const data = response.collection;
      this.setState({ assetImageData: data });
      console.log(this.state.assetImageData.items[0].href);
    });

    getAssetMeta(assetid).then(response => {
      const metaurl = response;
      fetch(metaurl.location)
        .then(res => res.json())
        .then(metadata => {
          this.setState({ assetData: metadata });
        });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Card className="asset">
          <CardContent>
            <Grid container className="asset" spacing={24}>
              <Grid item xs={12}>
                <Typography variant="h3">
                  {this.state.assetData["XMP:Title"]
                    ? this.state.assetData["XMP:Title"]
                    : this.state.assetid}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <img
                  src={
                    this.state.assetImageData &&
                    this.state.assetImageData.items[0].href
                  }
                />
              </Grid>
              <Grid item>
                <Typography>
                  {this.state.assetData["XMP:Description"]}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

Asset.propTypes = {
  location: PropTypes.object
};

export default withRouter(Asset);
