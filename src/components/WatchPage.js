import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideSidePanel } from '../utils/sidePanelSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';
import { addLikeCount } from '../utils/likeSlice';

const WatchPage = () => {

  const dispatch = useDispatch();
  const likeCountFromStore = useSelector(store => store.like.likeCount)
  const [searchParams] = useSearchParams()
  const [details, setDetails] = useState([])
  const [hitLike, setHitLike] = useState(false);
  const [updateLike, setUpdateLike] = useState(0)

  useEffect(() => {
    dispatch(hideSidePanel())
    getSingleVideoDetails()
  }, [])

  const getSingleVideoDetails = async () => {
    const data = await fetch(process.env.REACT_APP_SINGLE_YOUTUBE_VIDEO_API + searchParams.get("v"))
    const json = await data.json();
    console.log(json.items)
    setDetails(json.items[0] ? json.items[0] : json.items)

  }

  //console.log("details----", details)

  if (details.length === 0) return;


  const { snippet, statistics } = details;
  const { title, channelTitle } = snippet;
  const { viewCount, likeCount } = statistics;

  const likeHandle = () => {

    setHitLike(!hitLike)
    if (!hitLike) {
      //console.log(parseInt(likeCount) + 1)
      setUpdateLike(parseInt(likeCount) + 1)
    } else {
      //console.log(likeCountFromStore - 1)
      setUpdateLike(likeCountFromStore - 1)
    }

  }

  //console.log("updateLike---", updateLike)
  dispatch(addLikeCount(updateLike))
  //console.log("likeCountFromStore--", likeCountFromStore)


  return (
    <div className='flex flex-row'>
      <div className='flex-col'>
        <div className='pl-4 m-5' >
          <iframe
            className='rounded-3xl'
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div> <h1 className='pl-4 mx-5 my-2 font-bold text-2xl'>{title && title}</h1> </div>
        <div className='flex justify-between'>
          <div>
            <h3 className='pl-4 mx-5 my-2 font-semibold text-lg '>Channel Name: {channelTitle && channelTitle}</h3>
            <h3 className='pl-4 m-5 '>Views: {viewCount && viewCount}</h3>
          </div>

          <div className='flex '>

            <div className='p-4 m-2 pr-24 flex items-center'><button onClick={likeHandle}>{hitLike ? <img  src={require("../assets/thumbs-up_selected.png")} alt="liked" /> : <img  src={require("../assets/thumbs-up.png")} alt="like" />}</button><h3 className='p-2'> { likeCountFromStore ? likeCountFromStore : likeCount}</h3></div>
          </div>
        </div>

        <div><CommentContainer videoId={searchParams.get("v")} /></div>
      </div>
      <LiveChat />
    </div>
  )
}

export default WatchPage