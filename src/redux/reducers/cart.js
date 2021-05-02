const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}
const getTotalPrice = arr => arr.reduce((acc, item) => acc + item.price, 0)
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_TO_CART': {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload]

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems)
        }
      };
      const items = Object.values(newItems).map(obj => obj.items)
      const pizzas = items.flat()

      return {
        ...state,
        items: newItems,
        totalCount: pizzas.length,
        totalPrice: getTotalPrice(pizzas)
      }
    }
    case 'PILUS_CART': {
      const newObjItems = [ 
      ...state.items[action.payload].items,
       state.items[action.payload].items[0]];
      const newItems = {
         ...state.items,
         [action.payload]: {
          items : newObjItems,
          totalPrice:getTotalPrice(newObjItems)},
      };
      const newItemsArr = Object.values(newItems).map(obj => obj.items)
      const pizzas = newItemsArr.flat()
      return {
        ...state,
        items: newItems,
        totalCount: pizzas.length,
        totalPrice: getTotalPrice(pizzas)
      }
    }
    case 'MINUS_CART' : {
      const oldItems = state.items[action.payload].items
      const newObjItems = oldItems.length > 1 ?  state.items[action.payload].items.slice(1) : oldItems
      const newItems = {
        ...state.items,
        [action.payload]: { items: newObjItems, totalPrice: getTotalPrice(newObjItems) },
      };
      const newItemsArr = Object.values(newItems).map(obj => obj.items)
      const pizzas = newItemsArr.flat()
      return {
        ...state,
        items: newItems,
        totalCount: pizzas.length,
        totalPrice: getTotalPrice(pizzas)
      }
      
    }
    case 'CLEAR_CART':
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0
      }
    case 'REMOVE_CART': {
      const newItems = {
        ...state.items
      }
      const currentTotalPrice = newItems[action.payload].totalPrice
      const currentTotalCount = newItems[action.payload].items.length
      delete newItems[action.payload]
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount
      }
    }
    default:
      return state
  }
}
export default cartReducer

