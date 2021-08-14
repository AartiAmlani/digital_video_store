import React, { Component } from 'react';
import { Grid, TextField, Button, Typography, Link } from '@material-ui/core'
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/registration.css";



const Registration = () => {

  const [users, setUsers] = useState({
    firstName="",
    lastName="",
    email="",
    username="",
    password=""
  })

  const submitForm = (event) => {
    //  event.preventDefault();
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(users)
    })

        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          alert(`the User ${data.firstname} was added sucesefully`);
          setUsers( {
            firstName="",
            lastName="",
            email="",
            username="",
            password=""
          })
          window.location.href='/';
        })
     
        .catch(err => console.log(`Error : ${err}`))
  }


  return (
    <div >
      <Header />
      <form className="grid-main" action="/" method="POST" >
        <h2>Create New Account</h2>

        <TextField
          name='firstname'
          label="firstname"
          type='text'
          value={users.firstName}
          onChange={(event) => {
            setUsers({
              ...users,
              firstName: event.target.value
            })
          }}
          placeholder='Enter firstname'
          required />

        <TextField
          name='lastname'
          label="text"
          placeholder='Enter lastname'
          value={users.lastName}
          onChange={(event) => {
            setUsers({
              ...users,
              lastName: event.target.value
            })
          }}
          type='text'
          required />

        <TextField
          name='email'
          label="email"
          type='text'
          value={users.email}
          onChange={(event) => {
            setUsers({
              ...users,
              email: event.target.value
            })
          }}
          placeholder='Enter email'
          required />


        <TextField
          name='username'
          label="username"
          type='text'
          value={users.username}
          onChange={(event) => {
            setUsers({
              ...users,
              username: event.target.value
            })
          }}
          placeholder='Enter username'
          required />

        <TextField
          name='password'
          label="Password"
          placeholder='Enter password'
          onChange={(event) => {
            setUsers({
              ...users,
              password: event.target.value
            })
          }}
          value={users.password}
          type='password'
          required />



       
        <Button type='submit' className="addSubmitButton" onClick={(event)=>submitForm} color='primary' variant="contained"   >Sign Up</Button>

        <Typography  > Create a new Vudu account using

        </Typography>
        <div>
          <Button type="button" color='primary' variant="contained">  Walmart</Button>
          <Button type="button" color='primary' variant="contained"> FaceBook</Button>
          <Button type="button" color='primary' variant="contained"> Google</Button></div>
      </form>
      <Footer />
    </div>

  )
}
export default Registration;




