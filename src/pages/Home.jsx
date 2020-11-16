import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchPizzas } from '../redux/actions/pizzas'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components'
import { addPizzaToCart } from '../redux/actions/cart'

// эти две константы нужны для того, чтобы ссылки не эти переменные не пересоздавались при render в компоненте
// поэтому они вне компонента
const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
]

export const Home = () => {
  // передаст данные в redux store / взять эти данные потом можно в любом компоненте, т.к. в index.js есть <Provider store={store}>
  const dispatch = useDispatch()

  // возьмет данные из redux store
  // лучше указывать конкретно, что именно вытаскивать из store (чтобы render происходил только при изменении данных)
  const items = useSelector(({ pizzas }) => pizzas.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const cartItems = useSelector(({ cart }) => cart.items)
  const { category, sortBy } = useSelector(({ filters }) => filters)

  // один раз получаем список товаров и сохраняем их в redux / потои в любом компоненте можем взять эти данные с помощью хука useSelector
  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category)) // благодаря redux-thunk в dispatch можно передавать ф-ции, которые возвращают функции
  }, [category, sortBy, dispatch])

  // ссылка на ф-цию создается 1 раз при 1 рендере ( с помощью useCallback(() => , []) )
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
                addedCount={cartItems[obj.id] && cartItems[obj.id].length}
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
