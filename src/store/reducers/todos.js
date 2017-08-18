import * as types from '../action-types'
// 增加 删除 切换完成状态
export default function (state={list:[]},action) {
  switch (action.type){
    case types.ADD_TODO:
      return{
        ...state,
      list:[...state.list,{id:Date.now(),title:action.title,completed:false}]
      };
    case types.DEL_TODO:
      return {
        ...state,
        list:state.list.filter(item=>item.id!=action.id)
      };


    default:
     return state


  }
}

