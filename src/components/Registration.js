import React, { Component } from 'react';
import { Grid, TextField, Button, Typography, Link } from '@material-ui/core'
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/registration.css";
import Login from  "./Login.js"



class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: ' ',
            lastName: ' ',
            email: ' ',
            username: ' ',
            password: ' '
    }
}

//   const [users, setUsers] = useState({
    // firstName="",
    // lastName="",
    // email="",
    // username="",
    // password=""
//   })
handleemailChange = (e) => {

    this.state.email = e.target.value;


}
handlepasswordChange = (e) => {

    this.password = e.target.value;


}
handlefnameChange = (e) => {

    this.state.firstName = e.target.value;

}
handlelnameChange = (e) => {

    this.state.lastName = e.target.value;
}

handleunameChange = (e) => {

        this.state.username = e.target.value;
    
    }

  onsubmitForm = (event) => {
    //  event.preventDefault();
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
       // body: JSON.stringify(users)
       body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email:  this.state.email,
        username:  this.state.username,
        password: this.state.password̥̥

    })
    })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          alert(`the User ${data.firstname} was added sucesefully`);
        //   setUsers( {
        //     firstName="",
        //     lastName="",
        //     email="",
        //     username="",
        //     password=""
        //   })
          window.location.href='/Login';
        })
     
        .catch(err => console.log(`Error : ${err}`))
  }
  
//}


  render() { 
      return (
    <div >
      <Header />
      <form className="grid-main"  >
        <h2>Create New Account</h2>

        <TextField
          name='firstName'
          label="firstName"
          type='text'
         // value={users.firstName}
        //   onChange={(event) => {
        //     setUsers({
        //       ...users,
        //       firstName: event.target.value
        //     })
        //   }}
        onChange={(event) => this.handlefnameChange(event)}
          placeholder='Enter firstName'
          required />

        <TextField
          name='lastName'
          label="lastName"
          placeholder='Enter lastName'
        //   value={users.lastName}
        //   onChange={(event) => {
        //     setUsers({
        //       ...users,
        //       lastName: event.target.value
        //     })
         // }}
         onChange={(event) => this.handlelnameChange(event)}
          type='text'
          required />

        <TextField
          name='email'
          label="email"
          type='text'
        //   value={users.email}
        //   onChange={(event) => {
        //     setUsers({
        //       ...users,
        //       email: event.target.value
        //     })
        //   }}
        onChange={(event) => this.handleemailChange(event)}
          placeholder='Enter email'
          required />


        <TextField
          name='username'
          label="username"
          type='text'
        //   value={users.username}
        //   onChange={(event) => {
        //     setUsers({
        //       ...users,
        //       username: event.target.value
        //     })
        //   }}
        onChange={(event) => this.handleunameChange(event)}
          placeholder='Enter username'
          required />

        <TextField
          name='password'
          label="Password"
          placeholder='Enter password'
        //   onChange={(event) => {
        //     setUsers({
        //       ...users,
        //       password: event.target.value
        //     })
        //   }}
        //   value={users.password}
        onChange={(event) => this.handlepasswordChange(event)}
          type='password'
          required />



       
        <Button type='submit' className="addSubmitButton" onClick={(event)=>this.onsubmitForm} color='primary' variant="contained"   >Sign Up</Button>

        <Typography  > Create a new Vudu account using

        </Typography>
        <div>
          <Button type="button" color='primary' variant="contained">  Walmart</Button>
          <Button type="button" color='primary' variant="contained"> FaceBook</Button>
          <Button type="button" color='primary' variant="contained"> Google</Button></div>
      </form>
      <Footer />
    </div>

  )}

  
}
export default Registration;




