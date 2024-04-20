import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hideSidePanel } from '../utils/sidePanelSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

  const [searchParams] = useSearchParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideSidePanel())
  }, [])

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
        <div><CommentContainer videoId={searchParams.get("v")} /></div>
      </div>
      <LiveChat />
    </div>
  )
}

export default WatchPage