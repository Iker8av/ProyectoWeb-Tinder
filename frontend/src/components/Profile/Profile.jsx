import React from 'react'
import './Profile.css'
import axios from "axios";


export default function Profile() {
    const [edit, setEdit] = React.useState(false)
    const [name, setName] = React.useState()
    const [age, setAge] = React.useState()
    const [company, setCompany] = React.useState()
    const [lookingFor, setLookingFor] = React.useState()
    const [message, setMessage] = React.useState()

    const loadData = async () => {
        await axios.get("https://minireto-api-a01566927-tecmx.vercel.app/getUsers/24").then((res) => {
            setName([res.data[0].USER_NAME]);
            setAge([res.data[0].AGE]);
            setCompany([res.data[0].COMPANY]);
            setMessage([res.data[0].MESSAGE]);
            setLookingFor([res.data[0].LOOKING_FOR]);
        });
    };

    React.useEffect(() => {
        loadData();
    }, []);

    const updateProfile = () => {
        const body = {
            "id": 24,
            "name": name,
            "mess": message,
            "looking": lookingFor,
            "company": company,
            "age": age
        }
        const resp = axios.patch('https://minireto-api-a01566927-tecmx.vercel.app/update',body);
    }

    return (
        <div className='profile'>
            <header>
                <h2>Profile</h2>
                <button onClick={() => {if (edit) {updateProfile()}; setEdit(!edit) }}>Edit</button>
            </header>
            <div className='profile-right'>
                <img src={require('../../img/24.webp')} alt="profile pic" className='profile-pic'/>
                <div className='profile-info'>
                    <div className='profileInfo-header'>
                        <div>
                            <h3>Name:</h3>
                            {edit ? <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name"/> : <h2>{name} </h2> }
                        </div>
                        <div>
                            <h3>Age:</h3>
                            {edit ? <input value={age} onChange={(e) => setAge(e.target.value)} type="number" id="age" name="age"/> : <h2>{age} </h2> }
                        </div>
                    </div>
                    <div className='profile-row'>
                        <h3>Company:</h3>
                        {edit ? <input value={company} onChange={(e) => setCompany(e.target.value)} type="text" id="company" name="company"/> : <h2>{company} </h2> }
                    </div>
                    <div className='profile-row'>
                        <h3>Looking For:</h3>
                        {edit ? <input value={lookingFor} onChange={(e) => setLookingFor(e.target.value)} type="text" id="lookingFor" name="lookingFor"/> : <h2>{lookingFor} </h2> }
                    </div>
                    <div>
                        <h3>Message:</h3>
                        {edit ? <textarea value={message} onChange={(e) => {setMessage(e.target.value)}} name="message" className='textarea'/> : <h2>{message} </h2> }
                    </div>
                    {/* <div>
                        <h3>Custom Audio:</h3>
                        <h2>{"File mp3..."} </h2>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
