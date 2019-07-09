import React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "../containers/customer/Login.jsx"
import Join from "../containers/customer/Join"
import MyPage from "../containers/customer/Mypage"
import Home from "../containers/common/Home"
import Hello from "../containers/customer/Hello.jsx"
import LightSwitch from '../containers/customer/LightSwitch.jsx';
import Timer from '../containers/common/Timer.jsx';
import TodoApp from "../containers/common/TodoApp.jsx"
import Clock from "../containers/common/Clock.jsx"
const MyNavbar = () => {


  return (

    <Router>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/todoApp">스케줄러 </Nav.Link>
          <NavDropdown title="기본문법" id="basic-nav-dropdown">
          <NavDropdown.Item href="/hello">
          Hello
              </NavDropdown.Item>
            <NavDropdown.Item href="/lightSwitch">
            스위치
            </NavDropdown.Item>
            <NavDropdown.Item href="/timer">
            타이머
            </NavDropdown.Item>
            <NavDropdown.Item href="/clock">
            시계
            </NavDropdown.Item>
      
            </NavDropdown>
          {/* <Nav.Link href="/hello">Hello </Nav.Link>
          <Nav.Link href="/lightSwitch">스위치</Nav.Link>
          <Nav.Link href="/timer">타이머</Nav.Link> */}
          <NavDropdown title="회원관리" id="basic-nav-dropdown">
            <NavDropdown.Item href="/join">
              회원가입
              </NavDropdown.Item>
            <NavDropdown.Item href="/login">
            로그인
            </NavDropdown.Item>
            <NavDropdown.Item href="/mypage">
            마이페이지
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/remove">
            {/* <Link to = "/remove"> */}회원탈퇴{/* </Link> */}
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
      </Navbar>
    <Route path="/login"  component ={Login}/>
    <Route path="/join"  component ={Join}/>
    <Route path="/mypage"  component ={MyPage}/>
    <Route path="/home"  component ={Home}/>
    <Route path="/hello"  component ={Hello}/>
    <Route path="/lightSwitch"  component ={LightSwitch}/>
    <Route path="/timer"  component ={Timer}/>
    <Route path="/todoApp"  component ={TodoApp}/>
    <Route path="/clock"  component ={Clock}/>
   
   
    
</Router>
  );
}

export default MyNavbar