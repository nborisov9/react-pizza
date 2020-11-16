import React from 'react'
import classNames from 'classnames'

export const Button = (props) => {
  // button outline: true || false
  const { outline, children: content, className, onClick } = props

  return (
    <button
      className={classNames('button', className, {
        'button--outline': outline,
      })}
      onClick={onClick}>
      {content}
    </button>
  )
}
