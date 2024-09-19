import React, { useEffect, useState } from 'react'
import './Recommended.css'

import { apikey, v } from '../../data'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Recommended = ( {categoryId} ) => {

const [apiData,setApiData] = useState([]);

const fetchData = async ()=> {
    const rel=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${apikey}`
    await fetch(rel).then(res => res.json()).then(data=> setApiData(data.items))

}
useEffect(() => {
    fetchData();
},[])
  return (
    <div className='recommended'>
        {apiData.map((item,index) => {
            return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-vid">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{v(item.statistics.viewCount)} Views</p>
            </div>
        </Link>
       

            )

        })}
        
      
    </div>
  )
}

Recommended.propTypes = {
    categoryId : PropTypes.node,
}

export default Recommended
