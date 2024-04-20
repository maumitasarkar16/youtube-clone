import React, { useEffect, useState } from 'react'
import AllComments from './AllComments'


const CommentContainer = ({videoId}) => {

  const [showComment, setShowComment] = useState('')

  useEffect(() => {
      getComment()
  },[])

  const getComment = async () => {
    const data = await fetch(process.env.REACT_APP_YOUTUBE_COMMENT_API + videoId);
    const json = await data.json();
    //console.log("comments with replies ===",json.items)
    setShowComment(json.items)
  }

  return (
    <div className='pl-4 ml-5'>
       <h1 className='font-bold text-xl'>Comments:</h1> 
       <AllComments comments={showComment} />
    </div>
  )
}

export default CommentContainer