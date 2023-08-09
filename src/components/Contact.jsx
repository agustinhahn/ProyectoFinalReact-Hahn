
import React from 'react'

const Contact = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', padding:'20px', gap:'10px'}}>
            <h2 style={{textAlign:'center'}}>CONTACTATE CON NOSOTROS</h2>
            <label>E-mail: </label>
            <input type='email' style={{maxWidth:'300px'}} />
            <label>Tu mensaje: </label>
            <textarea style={{maxWidth:'500px', minHeight:'200px'}} type="text" />
            <button style={{maxWidth:'100px'}}>ENVIAR</button>
        </div>
    )
}

export default Contact