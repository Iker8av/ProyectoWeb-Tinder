import React from 'react'
import "./Sidebar.css"
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate()

  return (
    <div className='sidebar'>
        <h1 className='logo'>SmashPass</h1>
        <ul className='side-options'>
            <li onClick={() => navigate(`../`, { replace: true })}>Home</li>
            <li onClick={() => navigate(`../Likes`, { replace: true })}>Likes</li>
            <li onClick={() => navigate(`../Profile`, { replace: true })}>Profile</li>
            <li>Log Out</li>
        </ul>
    </div>
  )
}
