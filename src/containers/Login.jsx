import React, {Component} from 'react'
import {Form,Button} from 'react-bootstrap'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            customerId : '',
            password : ''
        }
    }
    render(){
        return(
            <div>
                <form onSubmit="{this.handleSubmit}">
                <Form>
                    <Form.Group controlId="customerId"> 
                        <Form.Label>CustomerId</Form.Label>
                        <Form.Control type="text" placeholder="CustomerId" />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    </Form>
                    <Button variant="primary">Login</Button>
                    <Button variant="secondary">Cancel</Button>
                </form>
            </div>
        );
    }
}
export default Login;