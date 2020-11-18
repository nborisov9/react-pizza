import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchPizzas } from '../redux/actions/pizzas'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components'
import { addPizzaToCart } from '../redux/actions/cart'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
]

export const Home = () => {
  const dispatch = useDispatch()

  const items = useSelector(({ pizzas }) => pizzas.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const cartItems = useSelector(({ cart }) => cart.items)
  const { category, sortBy } = useSelector(({ filters }) => filters)

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category)) // благодаря redux-thunk в dispatch можно передавать ф-ции, которые возвращают функции
  }, [category, sortBy, dispatch])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />

        <SortPopup
          onClickSortType={onSelectSortType}
          actvieSortType={sortBy.type}
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                onClickAddPizza={handleAddPizzaToCart}
                key={obj.id}
                {...obj}
              />
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index + Math.random(index + 0.3)} />)}
      </div>
    </div>
  )
}
