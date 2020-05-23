import React, { Component } from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

import './App.css';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state={
    todos:[
    {
            id:uuidv4(),
            title:'complete react crash course till tomorrow',
            completed:false
         },
         {
          id:uuidv4(),
          title:'girlscript task',
          completed:false
       },
       {
          id:uuidv4(),
          title:'graph materialize css',
          completed:false
     }
    
  ]
  }
   //checking the id with the given id and marking whole object as completed or vice versa
  markComplete=(id)=>{
   
    this.setState({todos:this.state.todos.map(todo=>{
      if(id===todo.id){
        todo.completed=!todo.completed
    }
    return todo;})
   });
  }
    //Delete
    delToDo=(id)=>{
      this.setState({todos:[...this.state.todos.filter(todo=>
        todo.id!==id)]});
        
    }
    //Add Todo
    addTodo=(title)=>{
      const newTodo={
        id:uuidv4(),
        title:title,
        completed:false
      }
      this.setState({todos:[...this.state.todos,newTodo]}) //takes the new todo and add it to states
    }
  render() {
    //console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
        <Header/>
        <AddTodo addTodo={this.addTodo}/>
        <Todo todos={this.state.todos} markComplete={
          this.markComplete} delToDo={this.delToDo}/>
        </div>
      
      </div>
    );
  }
}

export default App;
