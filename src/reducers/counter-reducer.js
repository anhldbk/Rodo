export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
