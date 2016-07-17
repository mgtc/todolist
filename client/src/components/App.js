'use strict';
import React from "react";
import TodoAdd from "./TodoAdd.js";
import TodoMain from "./TodoMain.js";
import $ from "jquery";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            todos: []
        };
        this.apiUrl = "http://localhost:3000/todo";
        this.ajaxGetTodo();
    }

    ajaxGetTodo() {
        $.ajax({
            type: "GET",
            url: this.apiUrl,
            dataType: 'json',
            success: (data) => {
                console.log(data);
                this.setState({ todos: data })
            },
            error: (xhr, status, err) => {
                console.error(this.apiUrl, status, err.toString());
            }
        })
    }

    ajaxCreateTodo(todoItem){
        $.ajax({
            type: "POST",
            url: this.apiUrl,
            data: todoItem,
            success: (data) => {
                console.log(data);
                this.setState({todos: this.state.todos });
            },
            error: (xhr, status, err) => {
                console.error(this.apiUrl, status, err.toString());
            }
        })
    }

    ajaxUpdateTodo(todoIndex){
        console.log("id=" + this.state.todos[todoIndex].id + "&isDone=" + (this.state.todos[todoIndex].isDone ? 1 : 0));
        $.ajax({
            type: "PUT",
            url: this.apiUrl,
            data: "id=" + this.state.todos[todoIndex].id + "&isDone=" + (this.state.todos[todoIndex].isDone ? 1 : 0),
            success: (data) => {
                console.log(data);
                this.setState({todos: this.state.todos });
            },
            error: (xhr, status, err) => {
                console.error(this.apiUrl, status, err.toString());
            }
        })
    }

    ajaxDeleteTodo(todoId) {
        $.ajax({
            type: "DELETE",
            url: this.apiUrl + '/' + todoId,
            success: (data) => {
                console.log(data);

            },
            error: (xhr, status, err) => {
                console.error(this.apiUrl, status, err.toString());
            }
        })
    }

    TodoAdd(todoItem){
        if (this.state.todos.length) {
            let todosLength = this.state.todos.length;
            let todosLastId = this.state.todos[todosLength-1].id;
            todoItem['id'] = todosLastId + 1;
        } else {
            todoItem['id'] = 0;
        }
        this.state.todos.push(todoItem);
        this.ajaxCreateTodo(todoItem);
    }

    changeTodoState(index, isDone) {
        this.state.todos[index].isDone = isDone;
        this.setState({todos: this.state.todos});
        this.ajaxUpdateTodo(index);
    }
    

    deleteTodo(index){
        let todoId = this.state.todos[index].id;
        this.state.todos.splice(index, 1);
        this.setState({todos: this.state.todos});
        this.ajaxDeleteTodo(todoId);
    }

    render(){
        var props = {
            todoCount: this.state.todos.length || 0,
            todoDoneCount: (this.state.todos && this.state.todos.filter((todo)=>todo.isDone)).length || 0
        };
        return (
            <div className="panel">
                <TodoAdd TodoAdd={this.TodoAdd.bind(this)}/>
                <TodoMain deleteTodo={this.deleteTodo.bind(this)} todos={this.state.todos} changeTodoState={this.changeTodoState.bind(this)}/>
            </div>
        )
    }
}
React.render(<App/>, document.getElementById("app"));
