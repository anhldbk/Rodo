import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TodoActionCreators from '../actions';

class TodoList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {todos, toggleTodo} = this.props;
    return (
      <ul className="list-group">
        {
          todos.map((todo) => {
            const style = {
              textDecoration: todo.completed? 'line-through': 'none'
            };
            return (
              <li key={todo.id} className="list-group-item"
                  onClick={() => {
                    console.log('Toggle Todo #'+ todo.id);
                    toggleTodo(todo.id);
                  }}>
                <span style={style}>{todo.text}</span>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(TodoActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
