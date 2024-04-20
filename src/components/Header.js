import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidePanel } from '../utils/sidePanelSlice';
import { addSearchCache } from '../utils/cacheSearchSlice';
import { useNavigate } from "react-router-dom";
import { addSearchResult, clearSearch } from '../utils/searchResultSlice';


const Header = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cachedSearchResults = useSelector(store => store.cacheSearch)
    const searchResultsExits = useSelector(store => store.searchResult.items[0])
    //console.log("searchResultsExits----", searchResultsExits)

    const [isHovered, setIsHovered] = useState(false);
    const inputRef = useRef();

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSearch, setShowSearch] = useState(false)

    const handleToggleSidePanel = () => {
        dispatch(toggleSidePanel())

    }

    const handleSearchInput = (e) => {
        setSearchQuery(e.target.value)
    }

    /**
   *  cachedSearchResults = {
   *     "iphone": ["iphone 11", "iphone 14"]
   *  }
   *  searchQuery = iphone
   */

    useEffect(() => {
        const timer = setTimeout(() => {
            /** GOAL: To minimize the API call by storing the result in cache. */
            //I want to fix my cache length ( LRU )

            if (cachedSearchResults[searchQuery]) {

                /// Modifying the cache as per LRU mechansim.
                setSearchResults(cachedSearchResults[searchQuery]);

            } else {
                getYoutubeAutoComplete()
            }

        }, 200)   //debouncing

        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])


    /** To fetch fresh Autocomplete suggestions from YT */
    const getYoutubeAutoComplete = async () => {
        // console.log("Api call")
        const data = await fetch(process.env.REACT_APP_YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSearchResults(json[1])
        dispatch(addSearchCache({
            [searchQuery]: json[1]
        }))
    }



    const finalSearch = async (searchQuery) => {
        console.log("searchQuery==", searchQuery)
        const data = await fetch(process.env.REACT_APP_YOUTUBE_SEARCH_RESULTS_API + searchQuery);
        const json = await data.json();
        console.log("finalSearch Result", json.items);
        if (!searchResultsExits) {
            dispatch(addSearchResult(json.items))
        } else {
            dispatch(clearSearch())
            dispatch(addSearchResult(json.items))
        }

        navigate("/search")
    }



    return (
        <div className='md:grid md:grid-flow-col shadow-md md:p-6 pb-14 px-4 '>
            <div className='flex md:col-span-1'>
                <img className='h-8 cursor-pointer' src={require("../assets/hamburger-menu.png")} alt="ham-burgur" onClick={handleToggleSidePanel} />
                <img className='h-8 w-24 mx-2 px-2' src={require("../assets/youtube-logo.png")} alt="logo" />
            </div>
            <div className='md:col-span-10 md:pl-64 '>
                <div>
                    <input className="w-60 border border-gray-400 md:w-3/4 p-1 rounded-l-full px-4" type="text" name="search" placeholder='Search' value={searchQuery} onChange={handleSearchInput} onFocus={() => setShowSearch(true)} onBlur={() => {
                        if (!isHovered) {
                            setShowSearch(false);
                        }
                    }} ref={inputRef} />
                    <button className='border border-gray-400 px-1 pt-[3px] pb-[9.5px] bg-gray-100 rounded-r-full' onClick={() => finalSearch(searchQuery)}>
                        <img className='' src={require("../assets/search.png")} alt="logo" width="20px" height="20px" />
                    </button>
                </div>
                {!showSearch || searchResults.length === 0 ? null :
                    <div onMouseEnter={() => { setIsHovered(true); }} onMouseLeave={() => { setIsHovered(false); }}>
                        <ul className='absolute w-[31rem] bg-white border-gray-400  rounded-l-lg p-2 m-2 shadow-lg'  >
                            {searchResults.map(s =>
                                <div key={s} className='flex p-2 hover:bg-gray-200 cursor-pointer' onClick={() => {
                                    setSearchQuery(s);
                                    inputRef.current.focus();
                                }} >
                                    <img className='mx-2 mr-4' src={require("../assets/search.png")} alt="logo" width="15px" height="15px" />
                                    <li>{s}</li>
                                </div>
                            )}
                        </ul>

                    </div>
                }


            </div>
            <div className='md:col-span-1 pl-72 '>
                <img className='h-8 -mt-24 md:-mt-0' src={require("../assets/user-icon.png")} alt="user-icon" />
            </div>
        </div>
    )
}

export default Header