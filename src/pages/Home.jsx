import React from 'react'

import { Categories, SortPopup, PizzaBlock } from '../components'


export const Home = ({ items }) => {
	
	return (
		<div className="container">
		<div className="content__top">

		  <Categories
			 items={[ 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые' ]} 
		  />

		  <SortPopup items={[
			{ name: 'популярности', types: 'popular' },
			{ name: 'по цене', types: 'price' },
			{ name: 'по алфавиту', types: 'alphabet' }
		]}/>

		</div>
		<h2 className="content__title">Все пиццы</h2>
		<div className="content__items">
			{
				items.map(obj => (
					<PizzaBlock
						key = {obj.id}
						{ ...obj }
					/>
				))
			}
		</div>
	 </div>
	)
}