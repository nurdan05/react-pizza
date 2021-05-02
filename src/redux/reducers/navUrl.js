const initialState = {
  url: "pizzas"
}
const navUrlReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA_URL':
          return {...state, url: action.payload}
        default:
          return state
      }
}
export default navUrlReducer