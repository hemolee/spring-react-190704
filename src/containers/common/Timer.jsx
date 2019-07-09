import React, {Component} from 'react'

class Timer extends Component{
    constructor(){
        super();
        this.state = { //state는 객체기 때문에 바로 값을 지정할 수 없다, this.state='2' 이런거 안됨
            seconds : 0
        }
    }
    tick(){
        this.setState(state=>({ //람다안에서 this를 사용하면 본 클래스가 아닌 그 상위의 윈도우로 올라가기때문에 this를 뺀다.
            seconds : state.seconds +1
        }));
    }
    componentDidMount(){
        this.interval = setInterval(()=>this.tick(),1000)//1000ms
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return(
            <div>
                seconds : {this.state.seconds}
            </div>
        );
    }
}

export default Timer