import React, {Component} from 'react';
import * as TodoActionCreators from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class TodoAdd extends Component {
  constructor(){
    super();
    this._onClick = this._onClick.bind(this);
  }

  _onClick(event){
    event.preventDefault();
    this.props.newTodo(this.refs.input.value);
  }

  render(){
    var style ={
      marginBottom: '10px'
    }
    return(
      <div className="form-inline" style={style}>
        <input type="text" className="form-control" id="new-todo" placeholder="New Todo" ref="input"/>
        <button onClick={this._onClick} className="btn btn-primary">Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return state;
}

const mapDispachToProps = (dispatch, ownProps) => {
  return bindActionCreators(TodoActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(TodoAdd);
