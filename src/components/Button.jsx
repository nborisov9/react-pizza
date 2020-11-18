import React from 'react'
import classNames from 'classnames'

export const Button = (props) => {
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
