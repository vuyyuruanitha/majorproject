/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import  "./App.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Registration(){
    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
        termsAccepted: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault(); 
        console.log('Form Submitted:', formValues);
        try {
            const response = await axios.post('http://localhost:5000/register', formValues);
            console.log('Registration Success:', response.data);
            
        } catch (error) {
            console.error('Registration Error:', error.response ? error.response.data : error.message);
        
        }
    }
    return(
        <div className="register-box">
                    <form onSubmit={handleSubmit}>
                        <h1>Registration</h1>
                        <div className="inputbox">
                            <input type="text" placeholder= "Username" onChange={handleChange} value={formValues.username}></input>
                            
                        </div>
                        <div className="inputbox">
                            <input type="email" placeholder= "Email" onChange={handleChange} value={formValues.email}></input>
                            
                        </div>
                        <div className="inputbox">
                            <input type="password" placeholder= "Password" onChange={handleChange} value={formValues.password}></input>
                            
                        </div>
                        <div className="terms&cond">
                            <label><input type="checkbox" name="termsAccepted" onChange={handleChange} checked={formValues.termsAcceted }></input>I agree to the terms and conditions</label>
                        </div>


                        <button type="submit">Register</button>

                        <div className="regs-link">
                            <p>Already have an account? {" "} <Link to="/">Login</Link> < br/></p>
                        </div>
                    </form>
                </div>
    );
}

export default Registration;