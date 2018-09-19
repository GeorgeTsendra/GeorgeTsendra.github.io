import React, { Component } from 'react';
import  ReactDOM from "react-dom";


 class Element extends React.Component {


    render() {
      const {number, id, initOfremoveTheElement} = this.props;

        return (

          <React.Fragment>
            <select className="select" name="">
               <option>Primus</option>
               <option>Twin</option>
               <option>Tripple</option>
               <option>Quadro</option>
            </select>
            <input type="number" name="" value={number}/>
            <button type="button" className="delete" name="delete" onClick={()=>{initOfremoveTheElement(id)}}>
            +
            </button>

          </React.Fragment>
        );
    }

}

export default Element;
