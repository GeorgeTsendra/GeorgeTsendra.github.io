import React, { Component } from 'react';
import  ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import Elements from "./elements/elements";
import ListData from "./list-data/list-data";


 class PopupClass extends React.Component<{}, {}> {
    popup: HTMLElement;

    constructor() {
        super();
        this.state = {
          showAddInput: false,
          value: "",
          listData: ListData,

        };
    }

    valueOnChange = (event)=>{
      this.setState({
        value: event.target.value
      })
      // console.log(this.state.value);
    }




    showAddInput = ()=> {
      this.setState({
        showAddInput: !this.state.showAddInput,
      })
      // console.log(this.state.showAddInput);
    }


    addNewElement = (event) => {
      ListData.push({
        id: Math.random()*100000000000000000,
        number: this.state.value,
      })
    }




    render() {

      // console.log( this.state.listData);



      const {
        changePopupShowOrHide
      } = this.props;


      let saveAndCose = ()=>{
        this.addNewElement()
        changePopupShowOrHide()
      }


        if (this.state.showAddInput) {
          return (
            <div className="wrapper">

              <header>
                <h2> Структура номеров </h2>
                <button type="button" name="button" onClick={changePopupShowOrHide}> + </button>
              </header>
              <main>

              <Elements
                  listData = {this.state.listData}

               />

               <div className="add_elements">

                  <button type="button" name="button" className="add" onClick={this.showAddInput}> ADD </button>
                  <input type="number"  className="add_input" value={this.state.value} onChange={this.valueOnChange}/>
                </div>
              </main>
              <footer>
                <button type="button" name="button" onClick={saveAndCose}>SAVE</button>
                <button type="button" name="button" onClick={changePopupShowOrHide}>CANCEL</button>

              </footer>
            </div>
          )
        }
        return (

          <div className="wrapper">

            <header>
              <h2> Структура номеров </h2>
              <button type="button" name="button" onClick={changePopupShowOrHide}> + </button>
            </header>
            <main>

            <Elements
              listData = {this.state.listData}

             />


              <div className="add_elements">

                <button type="button" name="button" className="add" onClick={this.showAddInput}> ADD </button>

              </div>
            </main>
            <footer>
              <button type="button" name="button" onClick={changePopupShowOrHide}>SAVE</button>
              <button type="button" name="button" onClick={changePopupShowOrHide}>CANCEL</button>

            </footer>
          </div>

        );
    }

}

export default PopupClass;
