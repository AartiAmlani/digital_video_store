import React, { Component } from 'react';
import { Grid, TextField, Button, Typography, Link } from '@material-ui/core'
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/login.css"
const Login = () => {
    return (

        <div  >
            <Header />
            <form className="grid-main">
                <h2>Login</h2>
                <TextField name='email' label="UserName" type='email' placeholder='Enter username' required />

                <TextField name='password' label="Password" placeholder='Enter password' type='password' required />

                <Typography >
                    <Link href="#" >
                        Forgot your Vudu password ?
                    </Link>
                </Typography>

                <Button type='submit' className="addSubmitButton" color='primary' variant="contained" >Sign In</Button>
                {/* onClick={(event) => this.handleComp("HomePage")} */}
                <Typography  > Create a new Vudu account
                    <Link to="/Registration">
                        Sign Up
                    </Link>
                </Typography>
                <div>
                    <Button type="button" color='primary' variant="contained">Walmart</Button>
                    <Button type="button" color='primary' variant="contained">FaceBook</Button>
                    <Button type="button" color='primary' variant="contained"> Google</Button></div>
            </form>
            <Footer />
        </div>

    )
}
export default Login;
