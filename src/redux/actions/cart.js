export const addCart = (cart) => ({
    type: 'ADD_PIZZA_TO_CART',
    payload: cart
})
export const clearCart = () => ({
    type: 'CLEAR_CART',
})
export const removeCart = (id) => ({
    type: 'REMOVE_CART',
    payload: id
})
export const plusCart = (id) => ({
    type: 'PILUS_CART',
    payload: id
})
export const minusCArt = (id) => ({
    type: 'MINUS_CART',
    payload: id
})