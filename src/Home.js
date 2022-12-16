import React, { Component } from 'react';
import img2 from "./images/logo.png";
class Home extends Component{
    render(){
        return(
            <div  style={{marginTop:"3rem",border:"2px solid black" ,background:"grey",marginLeft:"30rem",marginRight:"30rem"}}> 
                    <h2 style={{marginTop:"3rem"}}>WELCOME TO NOVGURUKUL 2021 BACTH</h2> 
                    <img src={img2} width={150} height={150}/>
            </div>
        )
    }
}
export default Home;