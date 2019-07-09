import React ,{Component} from 'react'
import TodoList from '../../components/TodoList.jsx'

class TodoApp extends Component{
    constructor(props){
        super(props); 
        this.state={items:[], text:''};
       /*  this.handleChange = this.handleChange.bind(this) //this.domEventA = this.x.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) //this.domEventB = this.y.bind(this) */
    }
    render(){
        return(
          <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}> 
          {/* 여기서 this.handleSubmit은 위 생성자에서 왼쪽 값. this.domEventB */}
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
        );
    }
    handleChange=(e)=>{ //값이 변하면 실행    x(e){}
        this.setState({text: e.target.value});
        //이벤트를 통해 자식(this)의 데이터(state)를 부모(component)에게 전달=>부모의 모든 자식컴포넌트에 데이터 공유하게끔.
        //text라는 키값(주소)을 e.target.value값으로 부모에게 전달. 부모 밑의 모든 자식에게 공유.
    }
    handleSubmit=(e)=>{                     //y(e){}
        e.preventDefault(); //form태그로 인해 submit되는 것을 막음
        if(!this.state.text.length){ //값이 없을때
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
          };
          this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
          }));
        }
    
}
export default TodoApp

//메소드를 arrowfunction으로 바꾸면 constructor에서 생성자 안만들어줘도 실행됨. 