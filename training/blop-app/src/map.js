import React, { Component } from 'react';
//import { withStyles } from '@material-ui/core/styles';
//import styles from '../../../../../../assets/css/Me.style.js';
import GoogleMapReact from 'google-map-react';
//import { Typography, Button } from '@material-ui/core';
//import Marker from '@material-ui/icons/LocationOnOutlined'

class DetailsMap extends Component {
    static defaultProps = {
        center: { lat: 40.7446790, lng: -73.9485420 },
      };

     
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
                
            <div className={classes.googleMap}>
                  <GoogleMapReact
                      zoom = {11}
                      onClick={this.onClick}
                      defaultCenter={ this.props.center }
                      >
                
                  </GoogleMapReact>
                </div>
      </div>
    )
  }
}

export default DetailsMap