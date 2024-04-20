import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SidePanel = () => {
  const isMenuOpen = useSelector(store => store.sidePanel.isSidePanelOpen);

  console.log(isMenuOpen)

  return  isMenuOpen ? (
    <div className='shadow-lg p-6 m-1 col-span-1'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>India Today</li>
        <li>Mirchi Bangla</li>
        <li>Net Ninja</li>
        <li>T-Series</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  ) : null
}

export default SidePanel