import React from 'react'
import './sign-up.css'
import signin from "./sign-in"
import imaegforsignup from '../Pics/logo.png'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState, useEffect } from 'react';
import Axios from "axios";
import { Alert, FormGroup } from "reactstrap"
import { Route } from 'react-router'
import { useHistory } from 'react-router-dom'

const types = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required("enter a valid email"),
    password: yup.string().min(6).max(12).required(),
    confirmpassword: yup.string().oneOf([yup.ref('password'), null]),
})




const Signup = () => {

    let history= useHistory();

    const { register, handleSubmit , formState: {errors} } = useForm({
        resolver: yupResolver(types),
    })


    const submitForm = (data) =>{
        alert("Successfully Signedup");
        history.push("/sign-in");
    }

    

//DATABASE PART
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const submitreview = () => {
        Axios.post('http://localhost:3004/api/insert', {
            username: username, 
            email: email,
            password: password
        }).then(() => {
            alert('successful insert');
        })

    };

    //DATABASE PART ENDS

    return (
        <div style={{
            display: 'flex', 
            alignItems: 'center', 
            height: '90vh'}}>



                <div className='signupdiv'>
                    <h1>Welcome!</h1>
                    <img alt='' src={imaegforsignup} width='100px' height='100px'/>
                </div>
                    
                <div class="container">
                <form class="form" onSubmit={handleSubmit(submitForm)}>

                    <h1 class="form__title">Signup</h1>
                    <div class="form__message form__message--error">
                        </div>
                    <div class="form__input-group">
                    <input 
                    type="text"
                    class="form__input" 
                    {...register("username")}
                    placeholder="Username" 
                    onChange={(e) => {
                        setusername(e.target.value);
                    }}
                    
                    />
            

                    <div class="form__input-error-message">{errors.username?.message}</div>
                </div>
                <div class="form__input-group">
                    <input 
                    type="text" class="form__input" 
                    {...register("email")} 
                    placeholder="Email Address" 
                    onChange={(e) => {
                        setemail(e.target.value);
                    }}
                    
                    />
            

                    <div class="form__input-error-message">{errors.email?.message}</div>
                </div>
                <div class="form__input-group">
                    <input 
                    type="password" 
                    class="form__input"
                    {...register("password")} 
                    placeholder="Password"  
                    onChange={(e) => {
                        setpassword(e.target.value);
                    }}
                    
                    />
    

                    <div class="form__input-error-message">{errors.password?.message}</div>
                </div>
                <div class="form__input-group">
                    <input 
                    type="password" 
                    class="form__input" 
                    {...register("confirmpassword")} 
                    placeholder="Confirm Password"  
                    
                    />
        
                    <div class="form__input-error-message">{errors.confirmpassword && "passwords should match !"}</div>
                </div>
                
                <button class="form__button" type="submit" onClick={submitreview}>Continue</button>
            

                <p class="form__text">
                    <a class="form__link" href="./sign-in" id="linkSignin">Already have an account? Sign in</a>
                </p>
            </form>
          
        </div>

    </div>
    )
}

export default Signup;