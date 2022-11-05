import React from 'react'
import ifg from "./ifg-img.png"
import zuri from "./zuripng.png"

export default function Footer() {
  return (
    <footer className='footer'>
        <img id="zuri" src = {zuri}alt="zuri-svg"/>
        <div className="hng">HNG Internship 9 Frontend Task</div>
        <img id='ifg' src={ifg} alt="ifg" />
    </footer>
  )
}
