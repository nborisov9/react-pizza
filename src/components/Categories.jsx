import React, {useState} from 'react'

export const Categories = ({ items }) => {
	const [activeItem, setActiveItem] = useState(3)

	const onSelectItem = index => {
		setActiveItem(index)
	}

	return (
		<div className="categories">
			<ul>
				<li
					onClick={() => onSelectItem(null)}
					className = {activeItem === null ? 'active' : ''}>
					Все
				</li>
				{ items && items.map((name, index) => (
				<li
					className = {activeItem === index ? 'active' : ''}
					onClick = {() => onSelectItem(index)}
					key={`${name}_${index}`}>
					{ name }
				</li>
				)) }
			</ul>
		</div>
	)
}