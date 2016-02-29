import React, {Component} from 'react';
import TodoList from './todo-list';
import TodoAdd from './todo-add';
import Counter from './counter';

export default class App extends Component {
  render() {
    var headerStyle = {
      margin: '50px 0px'
    }
    return (
      <div>
        <h1 style={headerStyle}>My Todo List</h1>
        <Counter />
      </div>
    );
  }
}
