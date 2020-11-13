import React from 'react'
import classNames from 'classnames'


export const Button = props => {	
	
	const {
		outline,
		children: content,
		className
	} = props

		return (	
			<button
				className={classNames('button', className, {
					'button--outline': outline
				})}
				onClick = {() => {}}
			>
				{ content }
			</button>
		) 
}