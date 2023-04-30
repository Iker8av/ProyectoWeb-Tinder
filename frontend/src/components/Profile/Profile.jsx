import React from 'react'
import './Profile.css'

export default function Profile() {
    const [edit, setEdit] = React.useState(false)

    const [name, setName] = React.useState("Bowser")
    const [age, setAge] = React.useState(30)
    const [company, setCompany] = React.useState("Nintendo")
    const [lookingFor, setLookingFor] = React.useState("Peach")
    const [message, setMessage] = React.useState("Peach, you're so cool And with my star, we're gonna rule Peach, understand I'm gonna love you 'til the very end.")

    const updateProfile = () => {
        const body = {
            "USER_ID": 24,
            "USER_NAME": name,
            "MESSAGE": message,
            "LOOKING_FOR": lookingFor,
            "COMPANY": company,
            "AGE": age
        }
        //await
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
                        {edit ? <textarea value={message} name="message" className='textarea'/> : <h2>{message} </h2> }
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
