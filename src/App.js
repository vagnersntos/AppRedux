import './App.css';
//import dos modulos
import React, {Component} from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions/actions";
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {
    render(){

      const {dispatch, visibleTodos} = this.props

      return(
          <div>
            <header className="App-header">
              <div>
                <AddTodo onAddClick={text => dispatch(addTodo(text))}/>
                <TodoList todos ={visibleTodos}/>
              </div>
            </header>
          </div>
      );
    }
}

//função que seleciona o estado atual da store
function select(state){
  return{
    visibleTodos: state.todos
  }
}

export default connect(select)(App);