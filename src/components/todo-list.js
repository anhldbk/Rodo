import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as TodoActionCreators from '../actions'

class TodoList extends Component{
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  _onChange(event){
    const todoid = event.currentTarget.getAttribute('data-todoid');
    this.props.toggleTodo(todoid);
    this.forceUpdate();
  }

  getTodos(){
    if(this.props.todos == undefined){
      return (
        <label>No todo</label>
      );
    }
    return this.props.todos.map((todo) => {
      let className = "incompleted-item";

      if (todo.completed){
        className += 'incompleted-item';
      }
      return (
        <li key={todo.id} className="list-group-item checkbox">
            <label>
              <input type="checkbox" defaultChecked={todo.completed} onChange={this._onChange}  data-todoid={todo.id}/>
              <font className={className}>{todo.text}</font>
            </label>
        </li>
      );
    });
  }

  render(){
    return (
      <ul className="list-group">
        {
          this.getTodos()
        }
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
}

const mapDispachToProps = (distpatch, ownProps) => {
  return bindActionCreators(TodoActionCreators, distpatch);
}

export default connect(mapStateToProps, mapDispachToProps)(TodoList);
