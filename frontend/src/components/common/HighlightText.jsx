import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-caribbeangreen-50'>
      {text}
    </span>
  )
}

export default HighlightText