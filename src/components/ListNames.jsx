import React from 'react'

const ListNames = (props) =>{
    const items = props.data.map( //람다에서 map은 반복문이다... 
        (i,v) =>{ //index만큼 돌려라
            return <li>{i}: {v}</li>
            } 
           
    )
    return(
        <ul>
            {items}
        </ul>
    );
}

export default ListNames;