import React from 'react'
import './UserCard.css'

export default function UserCard({interactCard, i, playingAudio, setPlayingAudio}) {
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
    
    return (
        <div className='UserCard' style={{"backgroundImage":`url(${require('../../img/peaches-bowser-1.webp')})`}}>
            <div className='usercard-container'>
                <div className='row-buttons'>
                    <button className='like-button' onClick={() => interactCard(2, i)}>Unlike</button>
                    <button className='like-button' onClick={() => interactCard(1, i)}>Like</button>
                </div>
                <div></div>
                <div className='card-info'>
                    <div className='card-header'>
                        <h2 >{"Bowser"}, {i}</h2>
                        <button className='play-button' onClick={() => start()}></button>
                    </div>
                    <span>Looking For: {"Peach"}</span>
                    <p>Peach, you're so cool And with my star, we're gonna rule Peach, understand I'm gonna love you 'til the very end.</p>
                </div>
            </div>
        </div>
    )
}
