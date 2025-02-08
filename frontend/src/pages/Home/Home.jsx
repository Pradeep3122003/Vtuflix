import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import poster from '/banner.jpg'
import title from '/title.png'
import play from '/play.svg'
import info from '/info.svg'
import Titlecards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="poster">
      <img src={poster} alt="" className='banner'/>
      <div className="captions">
        <img src={title} alt="" className='cap-image'/>
        <p className='cap-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eligendi iusto blanditiis repellat incidunt provident vero perspiciatis dolores natus eos at sapiente, repudiandae cum ab aut ipsam iure, corporis excepturi?</p>
        <div className="butt">
          <button><img src={play} alt="" />Play</button>
          <button><img src={info} alt="" />Info</button>
        </div>
      </div>
    </div>
    <div>
    <Titlecards/>
    </div>
     
      <Footer/>
    </div>
    
  )
}

export default Home
