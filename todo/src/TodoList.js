import React from "react";
import TodoForm from "./TodoForm.js";
import props from "./ToDo.js";
class TodoList extends React.Component {
    state = {
        todos: []
    };

    addTodo = toDo => {
        this.setState({
            todos: [props, ...this.state.todos]
        });
    }

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (props.id === id) {
                    return{
                        ...props,
                        complete: !todo.complete
                    };
                } else{
                    return props;
                }
            })
        })
    }

    render() {
        return (
            <div>
                <TodoForm onSubmit={this.addTodo}/>
                {this.state.todos.map(todo => (
                    <props 
                        key={todo.id} 
                        toggleComplete={
                            () => this.toggleComplete(todo.id)
                        }
                        todo={todo}

                    />
                ))}
            </div>
        )
    }
}

export default TodoList; 