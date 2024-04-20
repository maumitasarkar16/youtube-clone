import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchPage = () => {

    const searchResults = useSelector(store => store.searchResult.items[0])
    console.log("searchResults from search Page", searchResults)



    return (
        <div className='flex flex-wrap p-2 m-2 '>
            {
                searchResults.map(item =>
                    <div className='border border-solid border-gray-400 shadow-lg  m-2 rounded-3xl'>

                        <iframe
                            width="400"
                            height="250"
                            className='p-2 m-2 rounded-3xl'
                            src={"https://www.youtube.com/embed/" + item.id.videoId}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <Link className='pl-4 font-bold' to={"/watch?v=" + item.id.videoId}>Click to watch</Link>
                    </div>

                )
            }
        </div>
    )
}

export default SearchPage