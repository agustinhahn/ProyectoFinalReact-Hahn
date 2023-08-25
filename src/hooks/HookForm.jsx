import { useState } from 'react'

export const HookForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);


    const handleChange = (e) =>{
        const {name, value} = e.target; //aqui desestructura las variables para pasarlas al spread
        setForm({
            ...form, 
            [name]:value
        })
    };
    const handleBlur = (e) =>{
        handleChange(e);
        setErrors(validateForm(form)) //aqui valida cada una de las variables del form d cada input
    };
    const handleSubmit = (e) =>{};

    return{
        form,errors,loading, response, handleChange, handleBlur, handleSubmit
    }
}
