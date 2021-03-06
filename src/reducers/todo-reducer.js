import Immutable from 'immutable';

const initialState = [];

export default (state = initialState, action) => {
  if (action == undefined){
    return initialState;
  }
  switch (action.type) {
    case 'NEW_TODO':
      var newState = Immutable.List(state);
      return newState.push(action.payload);

    case 'TOGGLE_TODO':
      var newState = Immutable.List(state);
      return newState.update(action.payload.id, (value) => ({
          ...value,
          completed: !value.completed
        })
      );
  }
  return state;
}
