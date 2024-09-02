import React, { useState } from 'react'
import InputsControl from '../InputCompo/InputsControl'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../Context/Firebase'


function SignupPage() {

  const navigate = useNavigate()

  const [value, setValue] = useState({
    name: " ",
    email: " ",
    password: " ",
  })

  const handleSubmission = () => {
    if (!value.name || !value.email || !value.password) {
      setErrorMsg("Please Fill all Fields");
      return;
    }
    setErrorMsg('')

    setsubmitButtonDisable(true)

    createUserWithEmailAndPassword(auth, value.email, value.password)
      .then(async (res) => {
        setsubmitButtonDisable(false);

        const user = res.user;

        await updateProfile(user, {

          displayName: value.name
        })
        navigate('/')
        // console.log('user', user)
      })
      .catch((err) => {
        setsubmitButtonDisable(false);
        setErrorMsg(err.message);
        // console.log('Error', err)
      })

    // console.log(value)
  }

  const [errorMsg, setErrorMsg] = useState("")

  //ye disable false is liye h k pehly ye nhi run hoga bad mai ye 
  //ek data true hoga phir ye wapis se false hojaye ga inshort ye k maine dobara load hone se ruka h preventDefault h
  
  const [submitButtonDisable, setsubmitButtonDisable] = useState(false)

  return (
    <div className='styles.container' style={{
      height: "100px",
      minHeight: "100vh",
      width: "100%",
      backgroundColor: "#9900ff",
      background: "linear-gradient(to right, #9900ff, #cc80ff)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "sans-serif"
    }}>
      <div className='styles.innerBox' style={{
        minWidth: "400px",
        height: "fit-content",
        backgroundColor: "#fff",
        boxShadow: "1px 1px 4px rgba(0 ,0, 0, 0.2)",
        padding: "30px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "30px"
      }}>
        <h1 className='styles.heading'>
          SignUp
        </h1>

        <InputsControl label="Name" placeholder="Enter Your Name" onChange={(event) => setValue((prev) => ({ ...prev, name: event.target.value }))} />
        <InputsControl label="Email" placeholder="Enter Email Address" onChange={(event) => setValue((prev) => ({ ...prev, email: event.target.value }))} />
        <InputsControl label="password" placeholder="Enter Password" onChange={(event) => setValue((prev) => ({ ...prev, password: event.target.value }))} />

        <div className="Footer" style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",

        }}>
          <b style={{ fontWeight: "bold", fontSize: "0.875rem", color: "red", textAlign: "center" }}>{errorMsg} </b>

          <button onClick={handleSubmission} disabled={submitButtonDisable} style={{
            outline: "none",
            border: "none",
            backgroundColor: "#9900ff",
            color: "#fff",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "1rem",
            padding: "18px 16px",
            width: "100%",

          }}>SignUp</button>
          <p style={{
            fontWeight: "700",
            color: "#000"
          }}>Already Have An Account?
            <span style={{
              fontWeight: "bold",
              color: "#9900ff",
              letterSpacing: "1px",
              textDecoration: "none"
            }}>
              <Link to="/login">
                LogIn
              </Link>
            </span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default SignupPage
