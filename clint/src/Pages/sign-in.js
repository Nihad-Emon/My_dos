/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './sign-in.css'
const signin = () => {
    return (
        <div class="container">
            <form class="form" id="signin">
                <h1 class="form__title">Signin</h1>
                <div class="form__message form__message--error"></div>
                <div class="form__input-group">
                    <input type="text" class="form__input" autofocus placeholder="Username or email"></input>
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input type="password" class="form__input" autofocus placeholder="Password"></input>
                    <div class="form__input-error-message"></div>
                </div>
                <button class="form__button" type="submit">Continue</button>
                <p class="form__text">
                    <a href="#" class="form__link">Forgot your password?</a>
                </p>
                <p class="form__text">
                    <a class="form__link" href="./sign-up" id="linkSignup">Don't have an account? Create account</a>
                </p>
            </form>
        </div>
    )
}

export default signin;