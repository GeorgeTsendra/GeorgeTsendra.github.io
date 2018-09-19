import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Popup from "reactjs-popup";
import PopupClass from "./components/popup";
import PopupButton from "./components/button-popup";
import './App.css';


class App extends Component {

  constructor() {
      super();

      this.state = {
        text: "Hello world",
        popupIsOpen: false,
      }
  }

  openPopup = ()=> {

    this.setState({
      popupIsOpen: !this.state.popupIsOpen,
    })
    console.log(this.state.popupIsOpen);
  }


  render() {

    if (this.state.popupIsOpen) {
        return (
          <React.Fragment>
            <PopupClass changePopupShowOrHide = {this.openPopup}

            />


          </React.Fragment>
        )
    }

      return(
        <div className="App">
          <PopupButton
            changePopupShowOrHide = {this.openPopup}
          />

        </div>
      );
    }
}

export default App;
