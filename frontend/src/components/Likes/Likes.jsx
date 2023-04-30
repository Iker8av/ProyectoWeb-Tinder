import React, {useState, useEffect}  from 'react'
import './Likes.css'
import UserCard from '../UserCard/UserCard'
import axios from "axios";
import { useParams, Link } from "react-router-dom";


export default function Likes() {

    const [data, setData] = React.useState([1,2,3,4,5])
    const [like, setLike] = React.useState(0) // 0.- No Action | 1.- Like | 2.- Dislike //
    const [index, setIndex] = React.useState(null)
    const [playingAudio, setPlayingAudio] = React.useState(false)

    const interactCard = (like = 0, item = null) => {
        let newIndex = data.indexOf(item)

        setIndex(newIndex)
        setLike(like)
    }

    const handleTransitionEnd = (item) => {
        let newIndex = data.indexOf(item)

        if (index !== newIndex || like === 0) return;

        setIndex(null)
        setLike(0)

        const newData = data
        newData.splice(newIndex, 1)
        setData([...newData])
    }

  return (
    <div className='likes'>
        <h2>Likes</h2>
        <div className='grid-likes'>
            {data.length > 0 ? data.map(item => {
                return <div onTransitionEnd={() => handleTransitionEnd(item)} className={`grid-card ${index === data.indexOf(item) && like !== 0 ? like === 1 ? 'right' : 'left' : ''}`} >
                    <UserCard i={item} interactCard={interactCard} playingAudio={playingAudio} setPlayingAudio={setPlayingAudio}></UserCard>
                </div> 
            }) : <span className='message'>No profiles have been found.</span>}
        </div>
    </div>
  )
}
