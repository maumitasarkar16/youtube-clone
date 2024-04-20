import React from 'react'
import Comment from './Comment'

const AllComments = ({ comments }) => {
    console.log("comments==", comments[0])
    return (
        <div className='py-4'>
            {
                comments && comments.map(comment =>
                    <div>
                        <Comment key={comment.id} comment={comment?.snippet?.topLevelComment} />

                        {comment?.replies?.comments && comment?.replies?.comments.map(reply =>
                            <div className='pl-10 ml-10 '>
                                <Comment key={comment.id} comment={reply} />
                            </div>
                        )}

                    </div>
                )}
        </div>
    )
}

export default AllComments