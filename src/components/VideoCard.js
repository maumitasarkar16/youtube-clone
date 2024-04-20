import React from 'react'

const VideoCard = ({ info }) => {
  console.log("info==", info)

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet

  const splittedText = title.split(' ');
  const itCanOverflow = splittedText.length > 8;
  const splitTitle = itCanOverflow ? splittedText.slice(0, 8 - 1).join(' ') : title;

  return (
    <div className='p-2 m-2 shadow-lg w-[310px] h-72 '>
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold text-sm py-2">{itCanOverflow ? splitTitle + '...' : splitTitle}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard