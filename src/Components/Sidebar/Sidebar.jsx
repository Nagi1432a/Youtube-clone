import React from 'react'
import './Sidebar.css'
import home from '../../assets/youtube_clone_assets/assets/home.png'
import game from '../../assets/youtube_clone_assets/assets/game_icon.png'
import automobiles from '../../assets/youtube_clone_assets/assets/automobiles.png'
import sports from '../../assets/youtube_clone_assets/assets/sports.png'
import entertainment from '../../assets/youtube_clone_assets/assets/entertainment.png'
import tech from '../../assets/youtube_clone_assets/assets/tech.png'
import music from '../../assets/youtube_clone_assets/assets/music.png'
import blogs from '../../assets/youtube_clone_assets/assets/blogs.png'
import news from '../../assets/youtube_clone_assets/assets/news.png'
import jack from '../../assets/youtube_clone_assets/assets/jack.png'
import simon from '../../assets/youtube_clone_assets/assets/simon.png'
import tom from '../../assets/youtube_clone_assets/assets/tom.png'
import megan from '../../assets/youtube_clone_assets/assets/megan.png'
import cameron from '../../assets/youtube_clone_assets/assets/cameron.png'
import PropTypes from 'prop-types'
const Sidebar = ({sidebar , category , setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="sortcut-links">
            <div className={`side-link ${category===0?"active":""}`} onClick={() =>setCategory(0)}> 
                <img src={home} alt=""></img><p>Home</p>
            </div>
            <div className={`side-link ${category===20?"active":""}`} onClick={() =>setCategory(20)}>
                <img src={game} alt=""></img><p>Games</p>
            </div>
            <div className={`side-link ${category===2?"active":""}`} onClick={() =>setCategory(2)}>
                <img src={automobiles} alt=""></img><p>Automobiles</p>
            </div>
            <div className={`side-link ${category===17?"active":""}`} onClick={() =>setCategory(17)}>
                <img src={sports} alt=""></img><p>Sports</p>
            </div>
            <div className={`side-link ${category===24?"active":""}`} onClick={() =>setCategory(24)}> 
                <img src={entertainment} alt=""></img><p>Entertainment</p>
            </div>
            <div className={`side-link ${category===28?"active":""}`} onClick={() =>setCategory(28)}>
                <img src={tech} alt=""></img><p>Technology</p>
            </div>
            <div className={`side-link ${category===10?"active":""}`} onClick={() =>setCategory(10)}>
                <img src={music} alt=""></img><p>Music</p>
            </div>
            <div className={`side-link ${category===22?"active":""}`} onClick={() =>setCategory(22)}>
                <img src={blogs} alt=""></img><p>Blogs</p>
            </div>
            <div className={`side-link ${category===25?"active":""}`} onClick={() =>setCategory(25)}>
                <img src={news} alt=""></img><p>News</p>
            </div>
            <hr />
            
        </div>
        <div className="subscribe-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={jack} alt="" /><p>Sharath</p>
            </div>
            <div className="side-link">
                <img src={simon} alt="" /><p>Naveen</p>
            </div>
            <div className="side-link">
                <img src={tom} alt="" /><p>Ajay</p>
            </div>
            <div className="side-link">
                <img src={megan} alt="" /><p>Hema</p>
            </div>
            <div className="side-link">
                <img src={cameron} alt="" /><p>Chinni</p>
            </div>
        </div>



      
    </div>
  )
}


Sidebar.propTypes = {
    sidebar : PropTypes.node,
}
Sidebar.propTypes = {
    category : PropTypes.node,
}
Sidebar.propTypes = {
    setCategory : PropTypes.node,
}


export default Sidebar
