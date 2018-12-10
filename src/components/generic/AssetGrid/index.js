import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./AssetGrid.css";

class AssetGrid extends React.Component {
  render() {
    const data = this.props.data.collection;
    return (
      <React.Fragment>
        <Grid container className="assetGrid" spacing={24}>
          {data &&
            data.items.filter(asset => asset.links).map(asset =>
              asset.links.map(assetLink => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={assetLink.href}
                  className="assetGridItem"
                >
                  {asset.data.map(dataItems => console.log(dataItems))}
                  <Card>
                    {asset.data.map(dataItems => (
                      <CardHeader
                        key={dataItems.title}
                        title={dataItems.title}
                      />
                    ))}
                    <CardMedia
                      className="assetGridMedia"
                      image={assetLink.href}
                      title="Paella dish"
                    />
                    {asset.data.map(dataItems => (
                      <React.Fragment key={dataItems.title}>
                        <CardContent>
                          <Typography component="p" noWrap>
                            {dataItems.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                      </React.Fragment>
                    ))}
                  </Card>
                </Grid>
              ))
            )}
        </Grid>
      </React.Fragment>
    );
  }
}

AssetGrid.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default AssetGrid;
