import React from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "../containers/Login"
import Join from "../containers/Join"
import MyPage from "../containers/Mypage"
import Home from "../containers/Home"

const MyNavbar = () => {


  return (
    <Router>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="#link">스케줄러 </Nav.Link>
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
   
    
</Router>
  );
}

export default MyNavbar