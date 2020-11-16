import React from 'react'
import PropTypes from 'prop-types'


// memo - позволяет не делать rerender компонента, если в нем не изменились свойства (например props)
// если props изменится, то будет rerender
export const Categories = React.memo(
	({ items, onClickCategory, activeCategory }) => {
	
		return (
			<div className="categories">
				<ul>
					<li
						onClick={() => onClickCategory(null)}
						className = {activeCategory === null ? 'active' : ''}>
						Все
					</li>
					{ items && items.map((name, index) => (
					<li
						className = {activeCategory === index ? 'active' : ''}
						onClick = {() => onClickCategory(index)}
						key={`${name}_${index}`}>
						{ name }
					</li>
					)) }
				</ul>
			</div>
		)
	}
)

Categories.propTypes = {
	// activeCategory: PropTypes.oneOf([PropTypes.number, null]).isRequired,
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
	onClickCategory: PropTypes.func.isRequired 
}


// пропсы по умолчанию
// example: если types не был передан, то указываем какое он будет принимать значение
Categories.defaultProps = { items: [] }