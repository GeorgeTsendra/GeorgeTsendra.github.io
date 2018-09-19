import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Element from "./element/element";


class Elements extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        listData: [],
      };
    }

    removeTheElement = (idToRemove) => {

      console.log(this.state.listData , "before removing");

      let newArr = this.state.listData;
      newArr.forEach((value,index,arr)=>{

        if (value.id == idToRemove) {
         newArr.splice(index, 1)
        }
    })

    this.setState({
      listData: newArr
    })
    // this.render()
    console.log("removing done");
  }



  componentDidMount(){
    this.setState({
      listData : this.props.listData,
    })
    console.log(this.state.listData , "state componentDidMount");
  }


    render() {

        const {
          listData,
        } = this.props;
        console.log(this.state.listData , "state in render");

        // console.log(this.props.listData);

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
