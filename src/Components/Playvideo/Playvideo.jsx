import React, { useEffect, useState } from 'react'
import './Playvideo.css'
import video1 from '../../assets/youtube_clone_assets/assets/video.mp4'
import like from '../../assets/youtube_clone_assets/assets/like.png'
import dislike from '../../assets/youtube_clone_assets/assets/dislike.png'
import share from '../../assets/youtube_clone_assets/assets/share.png'
import save from '../../assets/youtube_clone_assets/assets/save.png'
import jack from '../../assets/youtube_clone_assets/assets/jack.png'
import user from '../../assets/youtube_clone_assets/assets/user_profile.jpg'
import PropTypes from 'prop-types'
import { apikey, v } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'
const Playvideo = () => {
    const {videoId} = useParams();
    const [apiData,setApiData] =  useState(null);
    const [channelData,setChannelData] = useState(null);
    const [commentData,setCommentData] = useState([]);

    const fetchVideoData = async () => {
        const viddetails = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apikey}`;
        await fetch(viddetails).then(res => res.json()).then(data => setApiData(data.items[0]));

    }

    const fetchOther =async () =>{
        const other =`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${apikey}`;
        await fetch(other).then(resp => resp.json()).then(data => setChannelData(data.items[0]));

        const comm =` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${apikey}`;
        await fetch(comm).then(res => res.json()).then(data => setCommentData(data.items));
    }

    useEffect(() => {
        fetchVideoData();
    },[videoId])

    useEffect(() => {
        fetchOther();
    },[apiData])
  return (
    <div className='play-video'>
        {/*<video src={video1} controls autoPlay muted></video>*/}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
        <div className="play-video-info">
            <p>{apiData?v(apiData.statistics.viewCount):"16k"} &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
            <div>
                <span><img src={like} alt="" />{apiData?v(apiData.statistics.likeCount):155}</span>
                <span><img src={dislike} alt="" /></span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>

        </div>
        <hr />
        <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
            <div>
                <p>{apiData?apiData.snippet.channelTitle:"title"}</p>
                <span>{channelData?v(channelData.statistics.subscriberCount):""} Subscribers</span>

            </div>
            <button>Subscribe</button>

        </div>
        <div className="vid-desc">
            <p>{apiData?apiData.snippet.description.slice(0,250):"Description here"}</p>
            <hr />
            <h4>{apiData?v(apiData.statistics.commentCount):102} Comments</h4>
            {commentData.map((item,index) => {
                return(
                    <div key={index} className="comment">
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt=""></img>
                <div>
                    <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span> 1ago day </span></h3>
                    <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>{v(item.snippet.topLevelComment.snippet.likeCount)}</span>
                        <img src={dislike} alt="" />
                    </div>

                </div>
            </div>

                )

            })}
            
           
            </div>

        </div>


    

  )
}


Playvideo.propTypes = {
    videoId : PropTypes.node,
}
export default Playvideo
