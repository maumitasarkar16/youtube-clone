import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='shadow-lg p-6 m-1 col-span-11'>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer