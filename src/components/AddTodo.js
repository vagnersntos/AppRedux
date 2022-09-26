import React, {Component} from "react";

class AddTodo extends Component{

    constructor(props){
        super(props)
        this.input = React.createRef();
    }

    inserirItem(event){
        event.preventDefault();
        
        var value = this.input.current.value
        var text = value.trim()
        this.props.onAddClick(text)
    }

    render(){
        return(
            <div>
                <input type="text" ref={this.input}/>
                <button onClick={(event) => this.inserirItem(event)}>Incluir Tarefa</button>
            </div>
        );
    }
}

export default AddTodo;