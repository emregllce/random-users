import React from 'react'
import "./Card.css"
import emailLogo from "./assets/email.svg"
import locationLogo from "./assets/location.svg"
import phoneLogo from "./assets/phone.svg"

function Card({ info }) {  
// const {dob, email, gender, location, name, phone, picture, registered} = {info[0]}
    return (
    <div className='card'>

        <div className="card-body">
        <div className='commonLine line1'>
            <img className='picture' src={info[0]?.picture.large}></img>
            <div className='inText'><h4>{info[0]?.name.title} {info[0]?.name.first} {info[0]?.name.last}</h4></div>
        </div>

         <div className="commonLine line2">
            <img className='icon' src={emailLogo}></img>
            <div className='inText'><h4>{info[0]?.email}</h4></div>
        </div>

        <div className="commonLine line3">
            <img className='icon' src={phoneLogo}></img>
            <div className='inText'><h4>{info[0]?.phone}</h4></div>
        </div>

        <div className="commonLine line4">
            <img className='icon' src={locationLogo}></img>
            <div className='inText'><h4>{info[0]?.location.city} - {info[0]?.location.country}</h4></div>
        </div>
        </div>
        <div className="commonLine line5">
            <h4>Age: {info[0]?.dob.age} </h4><h4>Register Date: {info[0]?.registered.date.slice(0,10)}</h4>
        </div> 
    </div>
    )}
export default Card