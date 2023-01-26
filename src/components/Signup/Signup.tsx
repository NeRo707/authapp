import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import './Signup.styles.css';
import { IAuth } from "../../interface";


function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState<IAuth>({name: "",email: "",pass: "",});
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState<boolean>(false);

  const handleSubmission = ():void => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="signup-box" >
      <div className="box">
        <h1 >SIGN UP</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event:React.ChangeEvent<HTMLInputElement>) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event:React.ChangeEvent<HTMLInputElement>) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event:React.ChangeEvent<HTMLInputElement>) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <div className="btns">
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            SIGN UP
          </button>
          
          {
            errorMsg ? (
              <><b>{errorMsg}</b></>
            ) : (
             <></>
            )
          }
          <p>
            Already have an account?{" "}
            <span className="loginsus">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;