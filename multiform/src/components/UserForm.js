import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails.js';

function UserForm(props) {

    const [step, setStep] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [city, setCity] = useState('');
    const [bio, setBio] = useState('');

    const nextStep = () => {
        setStep(step + 1);
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    const handleChange = input => e => {
        switch(input) {
            case 'firstName': 
                setFirstName(e.target.value);
                break;
            case 'lastName': 
                setLastName(e.target.value);
                break;
            case 'emailName': 
                setEmail(e.target.value);
                break;
            case 'occupation': 
                setOccupation(e.target.value);
                break;
            case 'city': 
                setCity(e.target.value);
                break;
            case 'bio': 
                setBio(e.target.value);
                break;
        }
    } 

    const values = {firstName, lastName, email, occupation, city, bio};

    switch(step) {
        case 1: return(
            <FormUserDetails 
                nextStep={nextStep}
                handleChange={handleChange}
                values={values}
            />
        );
        case 2: return(
            <h1>FormPersonalDetails</h1>
        );
        case 3: return(
            <h1>Confirm</h1>
        );
        case 4: return(
            <h1>Success</h1>
        )
    }
}

export default UserForm;

