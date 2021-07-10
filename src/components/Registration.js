import React, { Component } from 'react';
import { Grid, TextField, Button, Typography, Link } from '@material-ui/core'
import Header from "../components/Header";
import Footer from "../components/Footer";
 import  "../assets/css/registration.css";
const Registration =()=> {   
      return (
<div >
<Header/>
    <form className="grid-main">
      <h2>Create New Account</h2>
              <TextField name='firstname' label="firstname"  type='text' placeholder='Enter firstname'  required />
             
              <TextField name='lastname' label="lastname"  placeholder='Enter lastname' type='text'  required />

              <TextField name='email' label="UserName"  type='email' placeholder='Enter username'  required />
             
              <TextField name='password' label="Password"  placeholder='Enter password' type='password'  required />

              <TextField name='Re-password' label="Re-Password"  placeholder='Re Enter password' type='password'  required />
              
              <Button type='submit' className="addSubmitButton" color='primary' variant="contained"   >Sign Up</Button>
             
              <Typography  > Create a new Vudu account using 
               
              </Typography>
<div>
              <Button type="button" color='primary' variant="contained">  Walmart</Button>
             <Button type="button" color='primary' variant="contained"> FaceBook</Button>
             <Button type="button" color='primary' variant="contained"> Google</Button></div>
             </form>
             <Footer/>
             </div>
          
      )
  }
export default Registration;




