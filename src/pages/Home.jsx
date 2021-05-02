import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Categories, Sortpopup, PizzaBlock, LoadedPizza } from '../components'
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addCart } from '../redux/actions/cart';
import banner1 from "../../src/assets/img/banner1.png"
import banner2 from "../../src/assets/img/banner2.png"
import banner3 from "../../src/assets/img/banner3.png"
const cotegoryNames = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые']
const sortItems = [{name: 'популярности', type: 'popular', order: 'desc'},{name: 'цене', type: 'price', order: 'desc'}, {name: 'алфавиту', type:'name' , order: 'asc'}]
function Home({searchInput, setSearchInput }) {
  const dispath = useDispatch()
  const items = useSelector(({pizzasReducer}) => pizzasReducer.items)
  const isLoaded = useSelector(({pizzasReducer}) => pizzasReducer.isLoaded)
  const cart = useSelector(({cartReducer}) => cartReducer.items)

  const onSelectCotegory = React.useCallback((index)=> {
    dispath(setCategory(index))
  },[])

  const onSelectSortType = React.useCallback((type)=> {
    dispath(setSortBy(type))
  },[])
  const {category, sortBy} = useSelector(({filterReducer}) => filterReducer)
  const {url} = useSelector(({navUrlReducer}) => navUrlReducer)
  React.useEffect(() => {
      dispath(fetchPizzas(url,sortBy,category))
  },[url, category, sortBy])

  const addToCartPizza =(obj) => {
    dispath(addCart(obj))
  }
  
  return (
      <div className="container">
          <div className="content__banner">
            <div className="content__banner-item">
                <img className="content__banner--fullimg" src={banner1} alt="banner"/>
            </div>
            <div className="content__banner-items">
            <img className="content__banner--halfimg" src={banner2} alt="banner"/>
            <img className="content__banner--halfimg" src={banner3} alt="banner"/>
            </div>
          </div>
        <div className="content__top">
          <Categories activeCategory={category} onClickItem={onSelectCotegory} items={cotegoryNames}/>

          <Sortpopup  activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          
          {isLoaded ?  items.filter(item => item.name.toLowerCase().search(searchInput.toLowerCase().trim()) > -1).map((items) => <PizzaBlock onClickAddPizza={addToCartPizza} {...items} adededCart={cart[items.id] && cart[items.id].items.length}  /> ) : Array(10).fill(0).map((item, i) => <LoadedPizza key={i} />)}
        </div>
      </div>
  ) 
}

export default Home
