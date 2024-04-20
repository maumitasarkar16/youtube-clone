import React from 'react'

const Comment = ({ comment }) => {
    //console.log("comment==", comment)
    return (
        <div className='flex py-2 my-2'>
            <div><img src={comment?.snippet?.authorProfileImageUrl} alt="Author" /></div>
            <div className='pl-4'>
                <h2 className='font-bold text-md '>{comment?.snippet?.authorDisplayName}</h2>
                <div>{comment?.snippet?.textOriginal}</div>
            </div>
        </div>
    )
}

export default Comment