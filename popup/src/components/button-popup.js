import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';


 class PopupButton extends React.Component<{}, {}> {
  constructor() {
        super();
        this.state = {

        }
    }

    render() {

      const {
        changePopupShowOrHide
      } = this.props;

        return (
          <Button variant="contained" color="primary" onClick={changePopupShowOrHide}>
               Popup
          </Button>

        );
    }


}

export default PopupButton;
