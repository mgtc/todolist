'use strict';
import React, { findDOMNode } from "react";

class TodoAdd extends React.Component {

    handlerKeyUp(event){
        if(event.keyCode === 13){
            let value = event.target.value;

            if(!value) return false;

            let newTodoItem = {
                text: value,
                isDone: false
            };
            event.target.value = "";
            this.props.TodoAdd(newTodoItem);
        }
    }

    handleClick(event) {
        let node = findDOMNode(this.refs.input);
        let value = node.value.trim();

        if (!value) return false;

        let newTodoItem = {
            text: value,
            isDone: false
        };
        event.target.value = "";
        this.props.TodoAdd(newTodoItem);
    }

    render(){
        return (
            <div className="ui input">
                <input onKeyUp={this.handlerKeyUp.bind(this)} type="text" placeholder="New todo" ref="input"/>
                <button onClick={(e) => this.handleClick(e)} className="positive ui button">
                    Add Todo
                </button>
            </div>
        )
    }
}

export default TodoAdd;

