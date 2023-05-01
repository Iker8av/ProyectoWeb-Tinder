import React from 'react'
import UserCard from "../UserCard/UserCard"
import axios from "axios";
import "./Home.css"

export default function Home() {
    const [data, setData] = React.useState([])
    const [like, setLike] = React.useState(0) // 0.- No Action | 1.- Like | 2.- Dislike //
    const [transitionPerforming, setTransitionPerforming] = React.useState(false)
    const [playingAudio, setPlayingAudio] = React.useState(false)


    const interactCard = (like = 0) => {
        if (transitionPerforming) return;
        setLike(like)
        setTransitionPerforming(true)
        if (like==1) axios.post('/like/24/'+data[0].USER_ID);
    }

    const handleTransitionEnd = () => {
        if (like === 0) return;

        const newData = data
        setLike(0)
        newData.shift()
        setData([...newData])
        setTransitionPerforming(false)
    }


    const loadData = async () => {
        await axios.get("https://minireto-api.vercel.app/getUsers/").then((res) => {

            setData([...res.data.data]);
        });
    };

    React.useEffect(() => {
        loadData();
    }, []);

    return (
        <div className='Home'>
            {data.length > 0 ? data.map((item, i) => {
                return <div onTransitionEnd={() => handleTransitionEnd()} className={`Cards ${like !== 0 ? like === 1 ? 'right' : 'left' : ''}`} key={item.USER_ID}>
                    <UserCard key={item.USER_ID} data={item} i={i+1} setPlayingAudio={setPlayingAudio} playingAudio={playingAudio} interactCard={interactCard} page={"Home"}></UserCard>
                </div>
            }):  <span className='message'>No profiles have been found.</span>}
        </div>
    )
}