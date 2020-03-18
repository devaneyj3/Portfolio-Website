import { useState } from 'react';

const ContactForm = values => {
    const [ stateValues, setStateValues] = useState(values)

    const submitForm = e => {
        e.preventDefault();
        alert(`Submiting: ${stateValues.subject}, ${stateValues.message}`)
        clearForm()
    }

    const clearForm = () => {
        setStateValues(values)
    }

    const changeHandler = e => {
        setStateValues({...stateValues,[e.target.name]: e.target.value})
        
    }

    return [stateValues, changeHandler, submitForm]
}

export default ContactForm;