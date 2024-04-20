import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex p-2 m-2 items-center'>
        <span><img className='h-8 -mt-24 md:-mt-0' src={require("../assets/user-icon.png")} alt="user-icon" /></span>
        <span className='mx-2'>
            <h1 className='text-sm font-semibold'>{name}</h1>
            <h3 className='text-xs '>{message}</h3>
        </span>
    </div>
  )
}

export default ChatMessage
