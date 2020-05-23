import React, { Component } from 'react'

export class AddTodo extends Component {

    state={
        title:''  //no-space
    }
    onChange=(e)=>this.setState({ title:e.target.value }); //taking value from the input
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});

    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text"
                name="title"
                 style={{width:'80%'}}
                placeholder="Add todo items ..."
                value={this.state.title}
                onChange={this.onChange}
                />
                <input
                  type="submit"
                  value="Add"
                  className="btn"
                  style={{width:'20%', background:'#000',color:'#fff'}}
                  
                />
            </form>
        )
    }
}

export default AddTodo
