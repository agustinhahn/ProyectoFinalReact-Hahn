import React from 'react'
import logowp from '../assets/whatsapp.png'
import logoig from '../assets/instagram.png'
import logofb from '../assets/facebook.png'

const Footer = () => {
    return (
        <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', width:'100%', minHeight:'50px', borderTop:'2px inset rgb(230, 229, 219, 1)'}}>
            <div style={{display:'flex', justifyContent:'center', gap:'20px', marginTop:'10px'}}>
                <img className="logosfooter" src={logowp} alt="logo whatsapp" />
                <img className="logosfooter" src={logoig} alt="logo instagram" />
                <img className="logosfooter" src={logofb} alt="logo facebook" />
            </div>
            <div>
                <p style={{fontSize:'10px'}}>COPYRIGHT AGUSTIN HAHN</p>
            </div>
        </div>
    )
}

export default Footer