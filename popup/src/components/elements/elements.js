import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Element from "./element/element";


class Elements extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
    }



    render() {
      const {
          listData,
        } = this.props;


        let removeTheElement = (idToRemove) => {
          let newArr = this.props.listData;
          newArr.forEach((value,index,arr)=>{

            if (value.id == idToRemove) {
              newArr.splice(index, 1)
            }
          })
        }


      // console.log(this.props.listData , "state in props elements");

      let dataToMap = listData.map((value,index,arr) => {
        return (
          <div className="elements" key={index}>
            <Element
            number = {value.number}
            id = {value.id}
            initOfremoveTheElement = {this.removeTheElement}
            />
          </div>
        )
      })

        return (
              <div className="container">
              {dataToMap}
            </div>
        );
    }

}

export default Elements;
