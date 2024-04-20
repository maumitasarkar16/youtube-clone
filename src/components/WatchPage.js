import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideSidePanel } from '../utils/sidePanelSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams()
  const [details, setDetails] = useState([])

  useEffect(() => {
    dispatch(hideSidePanel())
    getSingleVideoDetails()
  }, [])

  const getSingleVideoDetails = async () => {
    const data = await fetch(process.env.REACT_APP_SINGLE_YOUTUBE_VIDEO_API + searchParams.get("v"))
    const json = await data.json();
    console.log(json.items[0])
    setDetails(json.items[0])
    
  }

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

        <div> <h1 className='pl-4 mx-5 my-2 font-bold text-2xl'>{details.snippet.title}</h1> </div>
        <div className='flex justify-between'>
          <div>
            <h3 className='pl-4 mx-5 my-2 font-semibold text-lg '>Channel Name: {details.snippet.channelTitle}</h3>
            <h3 className='pl-4 m-5 '>Views: {details.statistics.viewCount}</h3>
          </div>

          <div className='flex '>
            
            <h3 className='p-4 m-2 pr-24'>Likes: {details.statistics.likeCount}</h3>
          </div>
        </div>

        <div><CommentContainer videoId={searchParams.get("v")} /></div>
      </div>
      <LiveChat />
    </div>
  )
}

export default WatchPage