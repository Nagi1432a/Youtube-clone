import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/youtube_clone_assets/assets/thumbnail1.png'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { apikey, v } from "../../data"
import moment from 'moment'


const Feed = ({category}) => {

  const [data,setData] =useState([]);

  const fetchData= async () => {
    const videolist=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=1000&regionCode=IN&videoCategoryId=${category}&key=${apikey}`;
    await fetch(videolist).then(response=>response.json()).then(data => setData(data.items))
  }

  useEffect(()=>{
    fetchData();
  },[category])


  return (
    <div className="feed">
      {data.map((item,index) => {
        return(
        <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>{v(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
         </Link>
          

        )
      })}
     
      

    </div>
    
  )
}


Feed.propTypes = {
  category : PropTypes.node,
}

export default Feed
