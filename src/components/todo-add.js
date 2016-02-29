import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActionCreators from '../actions';

class TodoAdd extends Component {
  constructor(props){
    super(props);
    this._onClick=this._onClick.bind(this);
  }
  _onClick(event){
    this.props.newTodo(this.input.value);
    this.input.value = '';
  }
  render(){
    return (
      <div className="form-inline">
        <input type="text" className="form-control"
          placeholder="Enter a todo"
          ref={(node) => {this.input=node;}}/>
        <button onClick={this._onClick} className="btn btn-primary">Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return state;
}

const mapDistpatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(TodoActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDistpatchToProps)(TodoAdd);
