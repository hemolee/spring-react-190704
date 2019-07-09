import React, {Component} from 'react'
import {Form,Button} from 'react-bootstrap'

class Join extends Component{
    constructor(props){
        super(props);
        this.state = {
            customerId : '',
            password : '',
            name : '',
            phone : '',
            city : ''
        }

    }
    render(){
        return(
            <div>
                <form onSubmit="{this.handleSubmit}">
                <Form>
                    <Form.Group controlId="customerId"> 
                        <Form.Label>id</Form.Label>
                        <Form.Control type="text" placeholder="id" />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>pwd</Form.Label>
                        <Form.Control type="password" placeholder="pwd" />
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label>name</Form.Label>
                        <Form.Control type="text" placeholder="name" />
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Label>phone</Form.Label>
                        <Form.Control type="text" placeholder="phone" />
                    </Form.Group>
                    <Form.Group controlId="city">
                        <Form.Label>city</Form.Label>
                        <Form.Control type="text" placeholder="city" />
                    </Form.Group>
                    </Form>
                    <Button variant="primary">Join</Button>
                    <Button variant="secondary">Cancel</Button>
                </form>
            </div>
        );
    }
}
export default Join;