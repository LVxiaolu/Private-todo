import React, {Component} from 'react';
import {connect} from 'react-redux'
import {ADD_TODO} from '../store/action-types'
 class TodoHeader extends Component {
  handleKeyDown=(event)=>{
    if(event.keyCode==13 && event.target.value){
      let title=event.target.value;
      this.props.addTodo(title);
      event.target.value="";
    }
  }
  render() {
    return (
      <div>
        <h2 style={{textAlign:'center',}}>Private Todo</h2>
        <input type="text" className="form-control" onKeyDown={this.handleKeyDown}/>
      </div>

    )
  }
}
//mapStateToProps 把状态对象映射为当前组件属性对象 输入 从redux中读取状态在页面中渲染
// mapDispatchToProps 把dispatch方法映射为属性 输出 把当前视图中的操作发射出去
export default connect(
  state=>({}),
  {
    addTodo:title=>({type:ADD_TODO,title})
  }
)(TodoHeader);