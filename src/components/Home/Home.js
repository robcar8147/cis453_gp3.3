import React from 'react';
import './Home.css';
import pic from './mackinac.jpg'

export default function Home()
{
    return (
        <div className = "home">
            <h2>HELLO</h2>
            <p>Click on any page listed in the header.</p>
            <img alt = "Mackinac Bridge - Mackinaw, MI" src = {pic} />
        </div>
    )
}