import React, { Component } from 'react';
class Login extends Component{
    render(){
        return(
            <div  style={{marginTop:"3rem",border:"2px solid black" ,background:"grey",marginLeft:"30rem",marginRight:"30rem"}}> 
                <h2 style={{color:"lightblue" ,marginTop:"2rem"}}>HELLO LOGIN PAGE</h2>

                <div >Enter Users Name:<input type="text" name="Name"/><br></br></div>

                <div style={{marginTop:"2rem"}}>Enter Users Password:<input type="text" name="Password"/><br></br></div>

                <button style={{marginTop:"2rem",background:"lightblue"}}>Login</button><br></br>
            </div>
        )
    }
}
export default Login;