const INIT_STATE = [];

export default (state = INIT_STATE, action) {

  switch(action.type) {
    case 'ADD_TO_CART':
      return [action.payload]
    default: state
  }
}