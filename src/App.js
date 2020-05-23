import React, { Component } from 'react';
import Todo from './components/Todo'

class App extends Component {
  state={
    todos:[
    {
            id:1,
            title:'complete react crash course till tomorrow',
            completed:false
         },
         {
          id:2,
          title:'girlscript task',
          completed:false
       },
       {
          id:3,
          title:'graph materialize css',
          completed:false
     }
    
  ]
  }
  render() {
    //console.log(this.state.todos)
    return (
      <div className="App">
        <Todo todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
