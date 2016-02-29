import { combineReducers } from 'redux';
import todos from './todo-reducer';
import counter from './counter-reducer';

const rootReducer = combineReducers({
    todos,
    counter
  }
);

export default rootReducer;
