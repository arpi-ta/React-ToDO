import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
class Todo extends Component {

  render() {
   /* console.log(this.props.todos)
    return (
      <div >
        <h1>Todo !!</h1>
      </div>
    ); */
  return this.props.todos.map((todo)=>(
    <TodoItem key={todo.id} todo={todo} markComplete={
      this.props.markComplete } delToDo={this.props.delToDo}/>
  ));
  }
}
Todo.propTypes={
  todos:PropTypes.array.isRequired
}

export default Todo;