import Immutable from 'immutable';

const initialState = [
  {
    id: 0,
    text: "How long will I love you?",
    completed: false
  },
  {
    id: 1,
    text: "Kiss when your lips still red",
    completed: false
  },
  {
    id: 2,
    text: "Rule the world",
    completed: true
  }
]


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
      return newState.update(action.payload.id, (value) => {
        value.completed = !value.completed;
        console.log(value);        
        return value;
      });
      break;
  }
  return state;
}
