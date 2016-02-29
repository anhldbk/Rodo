import {INCREMENT, DECREMENT} from '../reducers/counter-reducer'
export const onIncrement = () => {
  return {
    type: INCREMENT
  }
}

export const onDecrement = () => {
  return {
    type: DECREMENT
  }
}
