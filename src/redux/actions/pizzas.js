import axios from 'axios'

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload
})

export const fetchPizzas = (url, sortBy, category) => (dispath) => {
    dispath(setLoaded(false))
    axios.get(`http://localhost:3001/${url === undefined ? "pizzas" : url}?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({ data }) => dispath(setPizzas(data)))
}
export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
}) 