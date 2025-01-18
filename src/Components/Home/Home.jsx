import React from 'react'
import './Home.css'
import video from '../../assets/video.mp4'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import {FiFacebook, FiTwitter} from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'
import { SiTripadvisor } from 'react-icons/si';
export const Home = () => {
 return (
  <section className='home'>
 <div className="overlay"></div>
 <video src={video} muted autoPlay loop type="video/mp4"></video>
 <div className="homeContent container">
  <div className="textDiv">

  <span className="smallText">
    Our Packages
</span>
<h1 className="homeTittle">
    Search Your Holiday
</h1>
  </div>
  <div className="cardDiv grid">
    <div className="destinationInput">
      <label htmlFor="city">Search your destination</label>
      <div className="input flex">
        <input type="text" placeholder='Enter name here....'/>
        <GrLocation className='icon'/>
      </div>
    </div>
    <div className="date">
      <label htmlFor="date">Select your date:</label>
      <div className="input flex">
        <input type="date"/>
      </div>
    </div>
    <div className="priceInput">
    <div className="label_total flex">
      <label htmlFor="price">Max price:</label>
      <h3 className="total">$5000</h3>
    </div>
    <div className="input flex">
    <input type="range" max="5000" min="1000"/>
    </div>
      </div>
      <div className="searchOptions flex">
      <HiFilter className="icon1"/>
        <span>MORE FILTERS</span>
      </div>
    </div>
    <div className="homeFooterIcons flex">
      <div className="rightIcons">
        <FiFacebook className="icon2"/>
        <AiOutlineInstagram className="icon2"/>
        <FiTwitter className="icon2"/>
        <SiTripadvisor className='icon2'/>
      </div>
      <div className="leftIcons">
      <BsListTask className="icon2"/>
      <TbApps className="icon2"/>
      </div>
    </div>
  </div>
 
  </section>

  )
}
export default Home