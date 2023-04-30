import React, {useState, useEffect}  from 'react'
import './UserCard.css'
import axios from "axios";
import { useParams, Link } from "react-router-dom";



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
    const routeParams = useParams();
	const id = routeParams.id;
    const [data, setData] = useState ([]);

    const loadData = async () => {
        const response = await axios.get("https://minireto-api.vercel.app/getUsers/"+i);
        setData(response.data);
    };

    useEffect(() => {
    loadData();
    }, );

    //console.log(data[0].USER_NAME);

    return (
        <div>
                {data.map((item, index) => {
        return (
            <div key={item.USER_ID} >
            <div className='UserCard' style={{"backgroundImage":`url(${require('../../img/'+i+'.webp')})`}}>
            <div className='usercard-container'>
                <div className='row-buttons'>
                    <button className='like-button' onClick={() => interactCard(2, i)}>Unlike</button>
                    <button className='like-button' onClick={() => interactCard(1, i)}>Like</button>
                </div>
                <div></div>
                <div className='card-info'>
                    <div className='card-header'>
                        <h2 >{data[0].USER_NAME}</h2>
                        <button className='play-button' onClick={() => start()}></button>
                    </div>
                    <span>Looking For: {data[0].LOOKING_FOR}</span>
                    <p>{data[0].MESSAGE}</p>
                </div>
                <div>


                </div>

            </div>
        </div>
        </div>
        );
    })}
        </div>

    )


}
