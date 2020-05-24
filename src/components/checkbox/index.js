import React, { Component, useContext } from 'react';
import checked from './checked.png';
import unchecked from './unchecked.png';
export default class CustoneCheckbox extends Component {
  constructor(props){
    super(props);
    this.state = {
      checked : false
    };
    this.onClick=this.onClick.bind(this);

  }
  onClick() {
    console.log('checkbox click!')
    this.setState({checked: !this.state.checked});
  }
  render(){
    return(
      <img onClick={()=>this.onClick()} src={this.state.checked?checked:unchecked} 
      style={{width:25,right:0,top: 0,position: 'relative',float: 'right', cursor: 'pointer'}}/>
    );
  }
}