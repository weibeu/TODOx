import Axios from 'axios';
import React, { Component } from 'react'
import TodoItems from './TodoItems';
import AddTodo from './AddTodo';
import Tasks from './Tasks'


export class TodoPage extends Component {

    state={
        todos:[
        //    {id:50,
        //     completed:false,
        //     subject:`play ${Math.floor(Math.random()*10)} games daily`
        //     }, 
        //    {id:51,
        //     completed:true,
        //     subject:`a todo that has been completed `
        //     } ,
        //    {id:53,
        //     completed:false,
        //     subject:`a todo that needs to be deleted`
        //     } 
        ]
    }
        
        componentDidMount(){
                Axios.get(
                    '/api/tasks/',this.props.app.getAuthHeader())
                .then(res=>this.setState({todos:res.data}));    
        }

    toggleCompletionStatus(id){
        this.setState(
            {todos:this.state.todos.map(todo => {
                        if(todo.id===id){
                            todo.completed=!todo.completed;
                            // CURRENTLY NOT ABLE TO SEND TO SERVER COZ POST CREATES A NEW OBJ
                            this.updateTodosOnServer(todo.id,todo.subject,todo.completed);
                        }
                        return todo; }
                    )
            })
    }

    sendTodosToServer(id,subject,completed){
        Axios.post('/api/tasks/',{"id":id,"subject":subject,"completed":completed},this.props.app.getAuthHeader());
    }
    updateTodosOnServer(id,subject,completed){
        Axios.put('/api/tasks/',{"id":id,"subject":subject,"completed":completed},this.props.app.getAuthHeader());
    }
    
    deleteTodos(id){
        this.setState(
            {todos:this.state.todos.filter(todo=>todo.id!=id )}
        )
    }
    addNewTodo=(subject)=>{
        if(subject!==null){let todos = this.state.todos;
        let id = todos[todos.length-1].id++;
        this.setState({todos:[...todos,{id:id,completed:false,subject:subject}]})}
        this.sendTodosToServer(id,subject,false);
    }   
    render() {

        return (<>
            <AddTodo newTodo={this.addNewTodo}/>
            <Tasks todos={this.state.todos} TodoPage={this} />
        </>);
    }
}

export default TodoPage
