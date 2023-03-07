import React, { useState, useMemo, useEffect } from 'react';
import countryList from 'react-select-country-list';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import InputField from "../libary/components/InputFile";


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

    const designtionArray = [
        { value: 'uiDesigner', viewValue: 'Ui designer' },
        { value: 'uiDeveloper', viewValue: 'Ui developer' },
        { value: 'marketing', viewValue: 'Marketing' },
    ]
    const options = useMemo(() => countryList().getData(), [])
    useEffect(() => {
        console.log(options)
    }, [options]);
    // const [value, setValue] = useState();


    const nameHandeler = (event) => {
        setName(event.target.value);
        if (event.target.value === '') {
            setFormError({
                ...formError,
                name: "Enter your name01"
            })
        }
        else {
            setFormError({
                ...formError,
                name: ""
            })
        }
    }
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const emailHandeler = (event) => {
        setEmail(event.target.value);
        // let emailPattern = `[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$`;
        if (!isValidEmail(email)) {
            setFormError({
                ...formError,
                email: "please enter valid email"
            });
        }
        else {
            setFormError({
                ...formError,
                email: "",
            })
        }
    }
    const phoneNumberHandeler = (event) => {
        setPhone(event);
        if (event === '') {
            setFormError({
                ...formError,
                phone: "Enter your phone number"
            })
        }
        else {
            setFormError({
                ...formError,
                phone: ""
            })
        }
    }
    const designationHandeler = (event) => {
        setDesignation(event.target.value);
        if (event === '') {
            setFormError({
                ...formError,
                designation: "Enter your phone number"
            })
        }
        else {
            setFormError({
                ...formError,
                designation: ""
            })
        }
    }
    // const countryChangeHandler = (countryData) => {
    //     console.log(countryData);
    // }
    // const setValue = (countryData)=>{
    //     console.log(countryData);
    // }
    const dateOfBirthHandeler = (event) => {
        setDob(event.target.value);
        // console.log(event.target.value);
        // const year = new Date(Date.now() - event.target.value.getTime()).getUTCFullYear();;
        // var age = Math.abs(year - 1970);
        //calculate month difference from current date in time
        var month_diff = Date.now() - event.target.value.getTime();

        //convert the calculated difference in date format
        var age_dt = new Date(month_diff);

        //extract year from date    
        var year = age_dt.getUTCFullYear();

        //now calculate the age of the user
        var age = Math.abs(year - 1970);
        console.log(age);
        if (event.target.value === '') {
            setFormError({
                ...formError,
                designation: "Select your date of birth"
            })
        }
        else {
            setFormError({
                ...formError,
                designation: ""
            })
        }
    }

    const handelerSubmit = (e) => {
        e.preventDefault();
        console.log(name.length, email);
        let formErrorCopy = formError;
        let isError = false;

        if (!name) {
            isError = true;
            formErrorCopy.name = "Enter your name 02";
        }
        if (!email) {
            isError = true;
            formErrorCopy.email = "Enter your email";
        }
        if (!phone) {
            isError = true;
            formErrorCopy.phone = "Enter your Phone number";
        }
        if (!designation) {
            isError = true;
            formErrorCopy.designation = "Select your designation";
        }
        if (!dob) {
            isError = true;
            formErrorCopy.designation = "Select your date of birth";
        }
        if (isError) {
            setFormError({
                ...formError,
                name: formErrorCopy.name,
                email: formErrorCopy.email,
                phone: formErrorCopy.phone,
                designation: formErrorCopy.designation
            })
            console.log(formErrorCopy);
        }
        else {
            let payload = {
                name: name,
                email: email,
                phone: phone,
                designation: designation,
                dob: dob
            }
            console.log("Form error", formError, "Form Data", payload);
        }
    }

    return (
        <React.Fragment>
            <h1>Form</h1>
            <form>
                <div className='form-group'>
                    <label>Name :</label>
                    <input type="text" onChange={(event) => nameHandeler(event)} placeholder="Enter user name" />
                    <span className='error'>{formError.name}</span>
                </div>

                <div className='form-group'>
                    <label>Email :</label>
                    <input type="email" onChange={emailHandeler} placeholder="Enter email" />
                    <span className='error'>{formError.email}</span>
                </div>
                <div className='form-group'>
                    <label>Phone no:</label>
                    {/* <select onChange={countryChangeHandler}>
                        {
                            options.map((item)=>{
                                return(
                                    <option value={item?.value}>{item?.label}</option>
                                )
                            })
                        }
                    </select> */}
                    <PhoneInput
                        international
                        defaultCountry="RU"
                        // value={value}
                        onChange={phoneNumberHandeler} />
                    {/* <input type="number" placeholder='Enter your number' onChange={phoneNumberHandeler} /> */}
                    <span>{formError.phone}</span>
                </div>
                <div className='form-group'>
                    <label>Designation :</label>
                    <select onChange={designationHandeler}>
                        <option value="" disabled selected>Select designation</option>
                        {
                            designtionArray.map((item) => {
                                return (
                                    <option value={item?.value}>{item.viewValue}</option>
                                )
                            })
                        }
                    </select>
                    <span>{formError.designation}</span>
                </div>
                <div className='form-group'>
                    <label>DOB</label>
                    <input type="date" placeholder='select dob' onChange={dateOfBirthHandeler} />
                </div>


                <button onClick={handelerSubmit}>Submit</button>
            </form>
        </React.Fragment>
    )
}
export default Form