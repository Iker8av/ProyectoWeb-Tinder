import React from 'react'
import './Likes.css'
import UserCard from '../UserCard/UserCard'
import axios from "axios";


export default function Likes() {

    const [data, setData] = React.useState([])
    const [like, setLike] = React.useState(0) // 0.- No Action | 1.- Like | 2.- Dislike //
    const [id, setID] = React.useState(null)
    const [playingAudio, setPlayingAudio] = React.useState(false)

    const interactCard = (like = 0, item = null, id = 0) => {
        setID(id)
        setLike(like)

        axios.delete(`https://minireto-api.vercel.app/delete/like/24/${id}`)
    }

    const handleTransitionEnd = (item) => {
        if (id === item.USER_ID ||like === 0) return;

        setLike(0)
        loadData()
        setID(null)
    }

     const loadData = async () => {
        await axios.get("https://minireto-api.vercel.app/likes/24").then((res) => {

            const newData = res.data.filter((item, index, self) => index === self.findIndex((t) => (
                t.USER_ID === item.USER_ID && t.USER_NAME === item.USER_NAME
            )))

            setData([...newData]);
        });
    };

    React.useEffect(() => {
        loadData();
    }, []);

  return (
    <div className='likes'>
        <h2>Likes</h2>
        <div className='grid-likes'>
            {data.length > 0 ? data.map((item, index) => {
                return <div onTransitionEnd={() => handleTransitionEnd(item)} className={`grid-card ${index === data.indexOf(item) && like !== 0 ? like === 1 ? 'right' : 'left' : ''}`} >
                    <UserCard data={item} i={index} interactCard={interactCard} playingAudio={playingAudio} setPlayingAudio={setPlayingAudio}></UserCard>
                </div> 
            }) : <span className='message'>No profiles have been found.</span>}
        </div>
    </div>
  )
}
