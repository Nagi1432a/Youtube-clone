import React, { useState } from 'react'
import './Home.css'
import Sidebar from '/src/Components/Sidebar/Sidebar'
import PropTypes from 'prop-types'
import Feed from '../../Components/Feed/Feed'
const Home = ({sidebar}) => {

  const [category,setCategory] = useState(0);
  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`container ${sidebar?"":'large-container'}`}>
          <Feed category={category}/>
      </div>

    </>
  )
}


Home.propTypes ={
  sidebar : PropTypes.node
}
export default Home
