import React from 'react';
import './Footer.css';
import video2 from '../../Assets/video2.mp4';
import { FiSend } from 'react-icons/fi';
import { VscCompassDot } from 'react-icons/vsc';
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';

export const Footer = () => {
  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button className='btn1 flex' type='submit'>
              SEND<FiSend className="icon4" />
            </button>
          </div>
        </div>
       
        <div className="footerCardContainer">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <button className="logo" onClick={() => console.log('Logo clicked')}>
                <VscCompassDot size={30} className="logo-icon" /> TravYo.
              </button>
            </div>
            <div className="footerParagraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni aut, tempore laboriosam repellendus, delectus voluptates totam nulla incidunt et repellat asperiores provident sit!
            </div>
            <div className="footerSocials">
              <AiOutlineTwitter className='icon twitter'/>
              <AiFillYoutube className='icon youtube'/>
              <AiFillInstagram className='icon instagram'/>
              <FaTripadvisor className='icon tripadvisor'/>
            </div>
          </div>
        </div>
        <div className="footerLinks grid">
          <div className="linkGroup">
            <span className="groupTitle">
              OUR AGENCY
            </span>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Services
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Insurance
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Agency
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Tourism
            </li>
            <li className="footerList flex">
              <FiChevronRight className="icon"/>
              Payment
            </li>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
