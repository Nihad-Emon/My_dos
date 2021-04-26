import React from "react";
import "./sign-in.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const types = yup.object().shape({
  usernamelogin: yup.string().required("Enter an existing username"),
  passwordlogin: yup.string().min(6).max(12).required("Wrong username"),
});

const Signin = () => {
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(types),
  });

  const submitForm = (data) => {};

  const [usernamelogin, setusernamelogin] = useState("");
  const [passwordlogin, setpasswordlogin] = useState("");

  const [loginstatus, setloginstatus] = useState("");
  const [currentuser, setcurrentuser] = useState("");

  const login = () => {
    Axios.post("http://localhost:3004/login", {
      usernamel: usernamelogin,
      passwordl: passwordlogin,
    }).then((response) => {
      if (response.data.message) {
        setloginstatus(response.data.message);
      } else {
        setcurrentuser(response.data[0].usernamel);
        alert("Logeg-in");
        history.push("/to-do/to-do-list");
      }
    });
  };

  return (
    <div class="container">
      <form class="form" id="signin" onSubmit={handleSubmit(submitForm)}>
        <h1 class="form__title">Signin</h1>
        <div class="form__message form__message--error"></div>
        <div class="form__input-group">
          <input
            type="text"
            class="form__input"
            placeholder="Username"
            {...register("usernamelogin")}
            onChange={(e) => {
              setusernamelogin(e.target.value);
            }}
          />
          <div class="form__input-error-message">
            {errors.usernamelogin?.message}
          </div>
        </div>
        <div class="form__input-group">
          <input
            type="password"
            class="form__input"
            placeholder="Password"
            {...register("passwordlogin")}
            onChange={(e) => {
              setpasswordlogin(e.target.value);
            }}
          />
          <div class="form__input-error-message">
            {errors.passwordlogin?.message}
          </div>
        </div>
        <button class="form__button" type="submit" onClick={login}>
          Continue
        </button>
        <p class="form__text">
          <a href="#" class="form__link">
            Forgot your password?
          </a>
        </p>
        <p class="form__text">
          <a class="form__link" href="./sign-up" id="linkSignup">
            Don't have an account? Create account
          </a>
        </p>
      </form>

      <h1>{loginstatus}</h1>
    </div>
  );
};

export default Signin;
