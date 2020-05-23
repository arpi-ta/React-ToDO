import React, { Component } from 'react';
import PropTypes from 'prop-types';
const btnStyle={
    background:'#EE0000',
    color:'#fff',
    padding:'5px 10px',
    border:'none',
    float:'right',
    
 }
export class TodoItem extends Component {
   
    getStyle=()=>{
       
        /* if(this.props.todo.completed){
            return{
                backgroundColor:'#7FFF00',
              
                textDecoration:'line-through'
            }
        }
        else{
            return {
                textDecoration:'none'
            }
        } */
        return{
            backgroundColor:'#f4f4f4',
            borderBottom:'1px #ccc dotted',
            padding:'10px',
            textDecoration:this.props.todo.completed?'line-through':'none'
        }
    }
  
    render() {
        const { id,title}=this.props.todo;
        return(
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} />{' '}
                    {title}
                    <button onClick={this.props.delToDo.bind(this,id)}style={btnStyle}>X</button>
                    </p>
            </div>
        )
    }
}

TodoItem.propTypes={
    todo:PropTypes.object.isRequired
}


export default TodoItem
