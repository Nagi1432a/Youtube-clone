import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/youtube_clone_assets/assets/menu.png'
import logo from '../../assets/youtube_clone_assets/assets/logo.png'
import search from '../../assets/youtube_clone_assets/assets/search.png'
import upload from '../../assets/youtube_clone_assets/assets/upload.png'
import more from '../../assets/youtube_clone_assets/assets/more.png'
import notification from '../../assets/youtube_clone_assets/assets/notification.png'
import jack from '../../assets/youtube_clone_assets/assets/photo.jpg'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
  
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' onClick={() => 
          setSidebar(prev => prev === false?true:false)
        } src={menu_icon} alt="">
        </img>
        <Link to="/"><img className='logo' src={logo} alt=""></img></Link>

      </div>

      <div className='nav-middle flex-div'>
        <div className="searchbox">
        <input type="text" placeholder='Search'></input>
        <img src={search} alt=''></img>

        </div>
        
      </div>

      <div className='nav-right flex-div'>
        <img src={upload} alt="" />
        <img src={more} alt="" />
        <img src={notification} alt="" />
        <img src={jack} className='user-icon' alt="" />

      </div>




      
    </nav>
  )
}

Navbar.propTypes ={
  setSidebar : PropTypes.node
}


export default Navbar