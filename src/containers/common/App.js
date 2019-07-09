import React, { Component } from 'react'; //react 안에 component가 있음
import '../../assets/css/App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyNavbar from '../../components/MyNavbar.jsx'

class App extends Component{
  constructor(props){
    super()
  }
  render(){
    return(
      
      <div className='wrapper'>
      <MyNavbar/>
  
      </div>
      );    
  }
}

export default App;
