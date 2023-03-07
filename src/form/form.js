import React, { useState, useMemo, useEffect } from 'react';
import countryList from 'react-select-country-list';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import InputField from "../libary/components/InputFile";
import {Validators} from "../libary/utilities/Validators"

const Form = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [designation, setDesignation] = useState('');
    const [dob, setDob] = useState('');

    const [formError, setFormError] = useState({
        name: '',
        email: '',
        phone: '',
        designation: '',
        dob: "",
    })
    let state = {
        text: '',
        number: '',
        email: '',
        country: '',
        message: '',
        acceptance: false
    };
    const {text, country, message, acceptance} = state;
        const nameHandleChange = (key) => (value) => {
            // setName({[key]: value});
            setName(value)
            console.log(name)
        };
        const mobileHandleChange = (key) => (value) => {
            // setName({[key]: value});
            setPhone(value)
            console.log(phone)
        };
        
        return (
            
            <React.Fragment>
                <h1>Form</h1>
                <InputField
                    label={'Enter your name'}
                    value={name}
                    type='text'
                    placeholder='Enter your name'
                    validators={[
                        { check: Validators.required, message: 'This field is required' }
                    ]}
                    onChange={nameHandleChange('text')} />
                <InputField
                    label={'Enter your mobile number'}
                    value={phone}
                    type='number'
                    placeholder='Enter your mobile number'
                    validators={[
                        { check: Validators.required, message: 'This field is required' }
                    ]}
                    onChange={mobileHandleChange('number')} />
                
            </React.Fragment>
        )

    
}
export default Form