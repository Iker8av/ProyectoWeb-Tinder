import React from 'react'
import './Profile.css'

export default function Profile() {
    const [edit, setEdit] = React.useState(false)

    return (
        <div className='profile'>
            <header>
                <h2>Profile</h2>
                <button onClick={() => setEdit(!edit)}>Edit</button>
            </header>
            <div className='profile-right'>
                <img src={require("../../img/peaches-bowser-1.webp")} alt="profile pic" className='profile-pic'/>
                <div className='profile-info'>
                    <div className='profileInfo-header'>
                        <div>
                            <h3>Name:</h3>
                            {edit ? <input type="text" id="lname" name="lname"/> : <h2>{"Name"} </h2> }
                        </div>
                        <div>
                            <h3>Age:</h3>
                            <h2>{"Age"}</h2>
                        </div>
                    </div>
                    <div className='profile-row'>
                        <h3>Company:</h3>
                        <h2>{"Company"}</h2>
                    </div>
                    <div className='profile-row'>
                        <h3>Looking For:</h3>
                        <h2>{"Looking For"}</h2>
                    </div>
                    <div>
                        <h3>Message:</h3>
                        <h2>{"Message..."}</h2>
                    </div>
                    <div>
                        <h3>Custom Audio:</h3>
                        <h2>{"File.mp3"}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}