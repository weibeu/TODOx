import Axios from 'axios';
import React, { Component } from 'react'
import TodoItems from './TodoItems';
import AddTodo from './AddTodo';
import Tasks from './Tasks'


export class TodoPage extends Component {

    state={
        todos:[
           {id:69,
            completed:false,
            subject:`play ${Math.floor(Math.random()*10)} games daily`
            } 
        ]
    }
        
    componentDidMount(){
            Axios.get(
                '/api/tasks/',
                {headers:{"Authorization": `Token ${localStorage.getItem('token')}`}})
            .then(res=>this.setState({todos:res.data}));
    }

    markChecked(){
        console.log('from markChecked of TodoPage');
    }

    sendTodosToServer(subject){
        Axios.post('/api/tasks/',{"subject":subject},
        {headers:{"Authorization": `Token ${localStorage.getItem('token')}`}})
        .then(res=>console.log(res));
    }
    

    toggleCompletionStatus =(id)=> {
        this.setState={todos:this.state.todos.map(
            todo=>{
                if (todo.id==id) {
                    todo.completed=!todo.completed;
                }
                return todo;
            }
        )};
    }

    render() {

        return (<>
            <Tasks todos={this.state.todos} />
            <AddTodo/>
        </>);
    }
}

export default TodoPage
