import React from 'react';
import './Main.css';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';
import imgSrc from '../../assets/img_1.jpg';
import imgSrc2 from '../../Assets/img_2.jpg';
import imgSrc3 from '../../Assets/img_3.jpg';
import imgSrc4 from '../../Assets/img_4.webp';
import imgSrc5 from '../../Assets/img_5.jpeg';
import imgSrc6 from '../../Assets/img_6.jpeg';
import imgSrc7 from '../../Assets/img_7.jpg';
import imgSrc8 from '../../Assets/img_8.jpg';
import imgSrc9 from '../../Assets/img_9.jpg';
const Data = [
  {
    id: 1,
    imgSrc: imgSrc, 
    destTitle: "Jaflong",
    location: "Sylhet, Bangladesh",
    grade: "NATURAL BEAUTY",
    fees: "$500",
    description: "Jaflong, nestled in the Sylhet division of Bangladesh, is a captivating destination famed for its lush greenery, serene tea gardens, and the enchanting beauty of the Piyain River. It's an ideal retreat for nature enthusiasts and those seeking a tranquil escape."
  },
  {
    id: 2,
    imgSrc: imgSrc2, // Correct usage of imgSrc2 variable
    destTitle: "Cox's Bazar Beach",
    location: "Cox's Bazar, Bangladesh",
    grade: "BEACH RELAXATION",
    fees: "$600",
    description: "Cox's Bazar Beach is the crown jewel of Bangladesh, renowned for being the world’s longest natural sandy beach, stretching over 120 km. It’s an idyllic destination for those seeking relaxation, stunning ocean views, water activities, and unforgettable sunsets by the Bay of Bengal."
  },
  {
    id: 3,
    imgSrc: imgSrc3,
    destTitle: "Sundarbans",
    location: "Khulna, Bangladesh",
    grade: "WILDLIFE & NATURE",
    fees: "$1000",
    description: "The Sundarbans is the largest mangrove forest in the world and a UNESCO World Heritage Site. It is home to the majestic Royal Bengal Tiger, diverse wildlife, and a unique ecosystem of breathtaking natural beauty, perfect for adventure and wildlife enthusiasts."
  },
  {
    id: 4,
    imgSrc: imgSrc4,
    destTitle: "Saint Martin's Island",
    location: "Cox's Bazar, Bangladesh",
    grade: "ISLAND PARADISE",
    fees: "$1500",
    description: "Saint Martin's Island, the only coral island in Bangladesh, is a tropical paradise known for its crystal-clear waters, white sandy beaches, and tranquil environment. It's an ideal destination for relaxation, snorkeling, and enjoying fresh seafood by the Bay of Bengal."
  },
  {
    id: 5,
    imgSrc: imgSrc5,
    destTitle: "Sajek Valley",
    location: "Rangamati, Bangladesh",
    grade: "HILLTOP PARADISE",
    fees: "$5000",
    description: "Sajek Valley, often referred to as the 'Queen of Hills' in Bangladesh, is a breathtaking destination known for its lush green hills, floating clouds, and serene ambiance. It's a perfect getaway for nature lovers, offering panoramic views, vibrant tribal culture."
  },
  {
    id: 6,
    imgSrc: imgSrc6,
    destTitle: "Kuakata",
    location: "Barishal, Bangladesh",
    grade: "BEACH & SUNSET",
    fees: "$2000",
    description: "Kuakata, known as the 'Daughter of the Sea,' is one of the rare places in the world where you can enjoy both sunrise and sunset over the Bay of Bengal. Its peaceful beaches, scenic beauty, and rich cultural heritage make it a must-visit destination in Bangladesh."
  },
  {
    id: 7,
    imgSrc: imgSrc7,
    destTitle: "Moinamoti",
    location: "Comilla, Bangladesh",
    grade: "HISTORICAL SITES",
    fees: "$3000",
    description: "Moinamoti is an archaeological site in Comilla, Bangladesh, known for its ancient Buddhist Vihara and historical significance. The site features ruins of temples, monasteries, and artifacts that offer a glimpse into the rich cultural heritage of the region."
  },
  {
    id: 8,
    imgSrc: imgSrc8,
    destTitle: "Paharpur",
    location: "Naogaon, Bangladesh",
    grade: "ARCHAEOLOGICAL HERITAGE",
    fees: "$4000",
    description: "Paharpur is one of the most significant archaeological sites in Bangladesh and a UNESCO World Heritage Site. It is home to the ancient ruins of a Buddhist Vihara, offering a fascinating look into the country's history, culture, and religious practices."
  },
  {
    id: 9,
    imgSrc: imgSrc9,
    destTitle: "Kaptai",
    location: "Rangamati, Bangladesh",
    grade: "LAKE & NATURE",
    fees: "$2500",
    description: "Kaptai is a picturesque destination in the Chattogram Hill Tracts, known for the Kaptai Lake, the largest man-made lake in Bangladesh. Surrounded by lush hills, it offers boat rides, scenic views, and a peaceful atmosphere, making it perfect for nature lovers and adventurers."
  }
];

export const Main = () => {
  return (
    <section className='main container section'>
      <div class="sectTitle">
  <h3 class="title">Most Visited Places</h3>
</div>
      <div className="secContent grid">
        
        {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => (
          <div key={id} className="singleDestination">
            <div className="imageDiv">
              <img src={imgSrc} alt={destTitle} />
            </div>
            <div className="cardInfo">
              <h4 className="desTitle">{destTitle}</h4>
              <div>
                <span className='continent flex'>
                  <HiOutlineLocationMarker className='icon3' />
                  <span className='Name'>{location}</span>
                </span>
              </div>
              <div className="fees flex">
                <div className="grade">
                  <span>{grade}<small>+1</small></span>
                </div>
                <div className='price'>
                  <h5>{fees}</h5>
                </div>
              </div>
              <div className="desc">
                <p>{description}</p>
              </div>
              <button className='btn flex'>
                DETAILS <HiOutlineClipboardCheck className='icon'/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Main;
