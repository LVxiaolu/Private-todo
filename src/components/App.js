import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";
import TodoFooter from "./TodoFooter";
export default class App extends Component {
  render() {
    return (
      <div className="container" style={{marginTop:15}}>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-success">
              <div className="panel-heading">
                <TodoHeader/>
              </div>
              <div className="panel-body">
                <TodoBody/>
              </div>
              <div className="panel-footer">
                <TodoFooter/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
