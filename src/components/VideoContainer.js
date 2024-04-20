import React, { useEffect, useState, useRef, useCallback } from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
//import InfiniteScroll from "react-infinite-scroll-component";

const VideoContainer = () => {

  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([])
  const [hasMore, setHasMore] = useState(false); //has more data to load on lazy loading

  // const observer = useRef();
  // const lastVideoElement = useCallback(node => {
  //   console.log(node);

  //   if (loading) {
  //     console.log("1st")
  //     return;
  //   }
  //   if (observer.current) return observer.current.disconnect();

  //   observer.current = new IntersectionObserver(entries => {
  //     console.log("2nd")
  //     if (entries[0].isIntersecting && hasMore) {
  //       console.log("Visible")
  //       setPageNumber(prevPageNum => prevPageNum + 1)
  //     }

  //   })

  //   if (node) {
  //     console.log("3rd")
  //     return observer.current.observe(node)
  //   }

  // }, [loading, hasMore])

  useEffect(() => {
    getVideos();
  }, [pageNumber])

  const getVideos = async () => {
    setLoading(true)
    setError(false)
    const data = await fetch(process.env.REACT_APP_YOUTUBE_VIDEOS_API)  //limit and page number should be provided in BE api endpoint
    const json = await data.json();
    //console.log(json.items)
    //setVideos(json.items)

    setVideos(videos => [...videos, ...json.items])
    setHasMore(json.items.length > 0)
    setLoading(false)

  }

  return (
    <>
      {/* <div className='flex flex-wrap'>
        {
          videos && videos.map((video, index) => {
            if (videos.length === index + 1) {
              console.log("block one")
              return <Link to={"/watch?v=" + video.id} key={index} ref={lastVideoElement}><VideoCard info={video} /></Link>
            } else {
              console.log("block two")
              return <Link to={"/watch?v=" + video.id} key={index} ><VideoCard info={video} /></Link>
            }

          })}
      </div>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div> */}


       {/* <InfiniteScroll className="flex flex-wrap" dataLength={videos.length} next={getVideos} hasMore={hasMore} >
        {videos.map(video => (
          <Link to={"/watch?v=" + video.id} key={video.id}><VideoCard info={video} /></Link>
        ))}
      </InfiniteScroll>  */}

      <div className="flex flex-wrap">
      {videos.map(video => (
          <Link to={"/watch?v=" + video.id} key={video.id}><VideoCard info={video} /></Link>
        ))}
      </div>
    </>
  )
}

export default VideoContainer