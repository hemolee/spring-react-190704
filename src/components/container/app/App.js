import React, { Component } from 'react'; //react 안에 component가 있음
import './App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from '../../present/Hello.js';
import MyNavbar from '../../present/nav/MyNavbar.js';
import Button from '../../present/Button.js';
class App extends Component{
  render(){
    return(
      <div className='wrapper'>
      <MyNavbar></MyNavbar><Button>hhh</Button>
      <Hello name='홍길동'> Hello {React} !! </Hello>
      </div>);    
  }
}

export default App;
