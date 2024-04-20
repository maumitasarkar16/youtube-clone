import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list = ['All', 'Live', 'Movies', 'Sports', 'Videos', 'Kapil Sharma', 'Shorts', 'Valentine', 'Cooking', 'Songs', 'Game']

  return (
    <div className='flex'>
      { list.map( (btnName) => <Button key={btnName} name={btnName} />) }
    </div>
  )
}

export default ButtonList