import React from 'react'
import './TitleCards.css'
import img1 from '../../assets/banner.jpg'
import play from '../../assets/play.svg'

const TitleCards = () => {
  return (
    <div className='titlecards'>
      <div className="title">Popular on Vtuflix</div>
      <div className="cardhold">
           <div className="card">
            <img src={img1} alt="" />
            
            <div className="caption">Avangers: Endgame</div>
            <div className="play"><img src={play} alt="" /></div>
           </div>
           <div className="card">
            <img src={img1} alt="" />
            
            <div className="caption">Avangers: Endgame</div>
            <div className="play"><img src={play} alt="" /></div>
           </div> <div className="card">
            <img src={img1} alt="" />
            
            <div className="caption">Avangers: Endgame</div>
            <div className="play"><img src={play} alt="" /></div>
           </div> <div className="card">
            <img src={img1} alt="" />
            
            <div className="caption">Avangers: Endgame</div>
            <div className="play"><img src={play} alt="" /></div>
           </div> <div className="card">
            <img src={img1} alt="" />
            
            <div className="caption">Avangers: Endgame</div>
            <div className="play"><img src={play} alt="" /></div>
           </div>
           
      </div>
      <div className="title">Nostalagic hits</div>
      <div className="cardhold">
      <div className="card">
            <img src={img1} alt="" />
            
            <div className="caption">Avangers: Endgame</div>
            <div className="play"><img src={play} alt="" /></div>
           </div>
           <div className="card">
            <img src={img1} alt="" />
            
            <div className="caption">Avangers: Endgame</div>
            <div className="play"><img src={play} alt="" /></div>
           </div> <div className="card">
            <img src={img1} alt="" />
            
            <div className="caption">Avangers: Endgame</div>
            <div className="play"><img src={play} alt="" /></div>
           </div> <div className="card">
            <img src={img1} alt="" />
            
            <div className="caption">Avangers: Endgame</div>
            <div className="play"><img src={play} alt="" /></div>
           </div> <div className="card">
            <img src={img1} alt="" />
            
            <div className="caption">Avangers: Endgame</div>
            <div className="play"><img src={play} alt="" /></div>
           </div>
      </div>
    </div>
  )
}

export default TitleCards
