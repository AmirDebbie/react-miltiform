import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails.js';
import FormPersonalDetails from './FormPersonalDetails.js';
import Confirm from './Confirm';
import Success from './Success.js';

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
            case 'email': 
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
            <FormPersonalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
            />
        );
        case 3: return(
            <Confirm 
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
            />
        );
        case 4: return(
            <Success />
        )
    }
}

export default UserForm;

