import { useContext } from 'react';
import { ContextCart } from '../context/CartContext';
import { HookForm } from '../hooks/HookForm';
import Swal from 'sweetalert2'


const initialForm = {
    name: "",
    email: "",
    direccion: "",
    documento: "",
}

const validationsForm =  (form) =>{
    let errors = {}//va a validar cada variable, si este objeto tiene una propiedad significa que hay un error
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    
    if(!form.name.trim()){//si no tiene informacion
        errors.name = "el campo 'nombre' es requerido"
    }else if(!regexName.test(form.name.trim())){
        errors.name = "el campo 'nombre' solo acepta letras"
    }
    else if(!form.email.trim()){
        errors.email = "el campo 'email' es requerido"
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "el campo 'email' esta incompleto"
    }
    else if(!form.direccion.trim()){
        errors.direccion = "el campo 'direccion' es requerido"
    }
    else if(!form.documento.trim()){
        errors.documento = "el campo 'documento' es requerido"
    }
    return errors
}


const Form = () => {

    const {form,errors,loading,response,handleSubmit,handleChange,handleBlur} = HookForm(initialForm,validationsForm)
    const {} = HookForm(initialForm,validationsForm)

    const {botonCompra, setBotonCompra} = useContext(ContextCart)
    const {cart, setCart} = useContext(ContextCart)

    const cancelarCompra = () =>{
        setBotonCompra(false)
    }

    const botonEnviar = () =>{
        let objetoErrores = validationsForm(form)
        if(Object.keys(objetoErrores).length === 0){
            setBotonCompra(false)
            setCart([])
            compraAprobada()
            volverShop()
        }
        else{
            console.log(objetoErrores) // aqui enrealidad el mismo form no va a pasar la validacion y lo va a pedir
        }
    }    

    const compraAprobada = () =>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Gracias por tu compra ${form.name}`,
            showConfirmButton: false,
            timer: 2500,
            color: '#716add',
            background: 'linear-gradient(20deg, rgba(0, 0, 0, 0.8), black)'
            
        })
    }

    const volverShop = () =>{
        setTimeout(() => {
            window.location.href = './'
        }, 2600)
    }

    




    return (
        <div className="login-box">
        <p>FINALIZAR COMPRA</p>
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'15px'}}>
            <div className="user-box">
                <input name="name" placeholder='Escribe tu nombre' type="text" onBlur={handleBlur}  onChange={handleChange} requiered value={form.name}  />
                {errors.name && <p style={{color:'red', fontWeight:'bold'}}>{errors.name}</p>}
                <label>Nombre</label>
            </div>
            <div className="user-box">
                <input name="email" placeholder='Escribe tu E-mail' type="email" onBlur={handleBlur} onChange={handleChange} requiered value={form.email}  />
                {errors.email && <p style={{color:'red', fontWeight:'bold'}}>{errors.email}</p>}
                <label>E-mail</label>
            </div>
            <div className="user-box">
                <input name="direccion" placeholder='Escribe tu direccion' type="text" onBlur={handleBlur} onChange={handleChange} requiered value={form.direccion}  />
                {errors.direccion && <p style={{color:'red', fontWeight:'bold'}}>{errors.direccion}</p>}
                <label>Direccion</label>
            </div>
            <div className="user-box">
                <input name="documento" placeholder='Escribe tu DNI' type="number" onBlur={handleBlur} onChange={handleChange} requiered value={form.documento}  />
                {errors.documento && <p style={{color:'red', fontWeight:'bold'}}>{errors.documento}</p>}
                <label>Documento</label>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>   
                <a href="#" type='submit' onClick={botonEnviar}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                ENVIAR DATOS
                </a>
                <a href="#" onClick={cancelarCompra}>
                    CANCELAR
                </a>
            </div>
        </form>
        </div>
    )
}

export default Form