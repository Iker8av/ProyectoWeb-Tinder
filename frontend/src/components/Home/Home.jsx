import React from 'react'
import UserCard from '../UserCard/UserCard'
import "./Home.css"

export default function Home() {
    const [data, setData] = React.useState([1,2,3,4,5,6,7,8,9,11,13,20])
    const [like, setLike] = React.useState(0) // 0.- No Action | 1.- Like | 2.- Dislike //
    const [transitionPerforming, setTransitionPerforming] = React.useState(false)
    const [playingAudio, setPlayingAudio] = React.useState(false)


    const interactCard = (like = 0) => {
        if (transitionPerforming) return;
        setLike(like)
        setTransitionPerforming(true)
    }

    const handleTransitionEnd = () => {
        if (like === 0) return;

        const newData = data
        setLike(0)
        newData.shift()
        setData([...newData])
        setTransitionPerforming(false)
    }

    return (
        <div className='Home'>
            {data.length > 0 ? data.map(i => {
                return <div onTransitionEnd={() => handleTransitionEnd()} className={`Cards ${like !== 0 ? like === 1 ? 'right' : 'left' : ''}`} key={i}>
                    <UserCard setPlayingAudio={setPlayingAudio} playingAudio={playingAudio} interactCard={interactCard} i={i}></UserCard>
                </div>
            }):  <span className='message'>No profiles have been found.</span>}
        </div>
    )
}