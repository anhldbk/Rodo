import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as CounterActions from '../actions/counter-actions'

// const Counter = ({value, onIncrement, onDecrement}) => {
//     return (
//       <div>
//         <span>{value}</span>
//         <button onClick={onIncrement}>inc</button>
//         <button onClick={onDecrement}>dec</button>
//       </div>
//     );
// }

class Counter extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <span>{this.props.value}</span>
        <button onClick={this.props.onIncrement}>inc</button>
        <button onClick={this.props.onDecrement}>dec</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.counter
  }
}

const mapDispachToProps = (dispatch, ownProps) => {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Counter);
