
import {createStore,combineReducers} from 'redux'
import {todos,filter} from './reducers'
//把二个reducer合并成同一个reducer
let reducer=combineReducers({
  todos,
  filter
});

let store=createStore(reducer);

window.store=store;
export default store
