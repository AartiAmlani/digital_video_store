import React, { Component } from 'react';
import { Grid, TextField, Button, Typography, Link } from '@material-ui/core'
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/login.css"
import MovieContext from "../context/MovieContext";
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
//const Login = () => {
    function LoginPage(props) {
        const state = {
            email: '',
            password: ''
        
          }
        
          let history = useHistory();
          const { useractive, setUser } = useContext(MovieContext);
          const handleemailChange = (e) => {
        
            state.email = e.target.value;
            console.log(state.email);
        
        
          }
          const handlepasswordChange = (e) => {
        
            state.password = e.target.value;
            console.log(state.password);
        
        
          }
        
          const onSubmit = (e) => {
            console.log("onSubmit Call....");
        
            fetch("http://localhost:5000/auth",
              {
        
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
        
                },
                body: JSON.stringify({
                  username: state.email,
                  password: state.password,
                  firstName: '',
                  lastName: ''
                })
        
              })
              .then(res => res.json())
              .then(data => {
                console.log(state.email);
                fetch("http://localhost:5000/users/email/"+state.email)
                  .then(res => res.json())
                  .then((data) => {
                    setUser(
                      {
                  /*  useractive[0].user= "Auth";//use to set menu items
                    useractive[0].email=data[0].username;
                    useractive[0].fname=data[0].firstName;
                    useractive[0].lname=data[0].lastName;*/
        
                    user: "Auth",//use to set menu items
                    email:data[0].username,
                    fname:data[0].firstName,
                    lname:data[0].lastName
                      }  
                    )
                     
                  
                 console.log(data);
                
                    history.push('/App');
        
        
                  })
                  .catch(err => console.log(`Error ${err}`));
              })
              .catch(err => console.log(`Error:  ${err}`))
        
          }
    return (

        <div  >
            <Header />
            <form className="grid-main">
                <h2>Login</h2>
                <TextField name='email' label="UserName" type='email' onChange={(event) => handleemailChange(event)} placeholder='Enter username' required />

                <TextField name='password' label="Password" onChange={(event) => handlepasswordChange(event)} placeholder='Enter password' type='password' required />

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
export default LoginPage;
