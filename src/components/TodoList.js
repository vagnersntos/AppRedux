import React, {Component} from "react";
import Todo from "./Todo";

class TodoList extends Component{
    render(){
        return(
            <ul>
                {
                    this.props.todos.map(
                        todo => <Todo Key={todo.id} {...todo}/>
                    )
                }
            </ul>
        );
    }
}

export default TodoList;