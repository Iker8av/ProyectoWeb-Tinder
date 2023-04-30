import React, {useState, useEffect}  from 'react'
import './UserCard.css'

export default function UserCard({interactCard, data, i, playingAudio, setPlayingAudio}) {
    let play = false

    let audio = new Audio(require("../../audios/Peaches.mp3"))

    const start = () => {
        if (play){
            audio.pause()
            setPlayingAudio(false)
        }
        else {
            if(playingAudio) return
            audio.play()
            setPlayingAudio(true)
        }
        play = !play
        
    }

    console.log(data)

    return (
            <div  className='UserCard' style={{"backgroundImage":`url(${require('../../img/'+data.USER_ID+'.webp')})`}}>
            <div className='usercard-container'>
                <div className='row-buttons'>
                    <button className='like-button' onClick={() => interactCard(2, i)}><img alt='dislike' src={require("../../img/dislike.png")}/></button>
                    <button className='like-button' onClick={() => interactCard(1, i)}><img alt='like' src={require("../../img/heart.png")}/></button>
                </div>
                <div></div>
                <div className='card-info'>
                    <div className='cardInfo-container'>
                        <div className='card-header'>
                        <h2 >{data.USER_NAME}</h2>
                        {/* <button className='play-button' onClick={() => start()}></button> */}
                    </div>
                    <span>Looking For: {data.LOOKING_FOR}</span>
                    <p>{data.MESSAGE}</p>
                    </div>
                </div>
            </div>
        </div>
    )


}
