import React, {Component} from 'react';
import * as types from '../store/action-types';
import {connect} from 'react-redux'
 class TodoBody extends Component {
  render() {
    return (
      <ul className="list-group">
        {
          this.props.todos.length>0?
          <li className="list-group-item">
            <input
              onChange={event=>this.props.toggleAll(event.target.checked)}
              type="checkbox"
              checked={this.props.activeCount==0}/>{this.props.activeCount==0?'全部取消':'全部选中'}
          </li>:null
        }
        {
          this.props.todos.map((item,index)=>(
            <li className="list-group-item" key={index}>
              <input type="checkbox"
                     onChange={()=>this.props.toggleTodo(item.id)}
                     checked={item.completed}/>
              {
                this.props.editing===item.id?<input type="text" value={item.title}/>:
                <span
                  onDoubleClick={()=>this.props.changeEditing(item.id)}
                  style={{marginLeft:10,textDecoration:item.completed?'line-through':''}}>{item.title}</span>
              }

              <span className="pull-right">
                <button
                  onClick={()=>this.props.delTodo(item.id)}
                  className="btn btn-danger btn-xs">X</button>
              </span>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default connect(
  state=>({
    todos:state.todos.list,
    activeCount:state.todos.list.filter(item=>!item.completed).length,
    editing:state.todos.editing
  }),
{
  delTodo:id=>({type:types.DEL_TODO,id}),
  toggleTodo:id=>({type:types.TOGGLE_TODO,id}),
  toggleAll:checked=>({type:types.TOGGLE_ALL,checked}),
  changeEditing:id=>({type:types.CHANGE_EDITING,id})
}

)(TodoBody)