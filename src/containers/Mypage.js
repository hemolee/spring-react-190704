import React, {Component} from 'react'
import {Figure,Table} from 'react-bootstrap'
import cat from '../assets/images/cat.jpeg'

class Mypage extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div><Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={cat}            />
            <Figure.Caption>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
          <Table striped bordered hover>
          
            <tbody>
                <tr>
                <td rowSpan='2' colSpan='2' ><Figure>
            <Figure.Image
              width={50}
              height={100}
              alt="171x180"
              src={cat}            />
           
          </Figure></td>
               
                <td>ID</td>
                <td>이름</td>
                </tr>   
                <tr>
                
                
                <td>HONG</td>
                <td>홍길동</td>
                </tr>
                <tr>
                <td colSpan='3'>전화번호</td>
                <td >010-1111-1111</td>
                
                </tr>
                <tr>
                <td colSpan='3'>도시</td>
                <td >서울</td>
                
                </tr>
            </tbody>
        </Table>
          </div>
        );
    }
}
export default Mypage;