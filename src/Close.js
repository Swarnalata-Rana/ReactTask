import React, { Component } from 'react';
import thank from './images/thanku.jpg';
import gorila from './images/pic.gif';
class Close extends Component{
    render(){
        return(
            <div style={{fontSize:"20px",marginTop:"3rem",border:"2px solid black" ,background:"grey",marginLeft:"30rem",marginRight:"30rem"}}>
                <h2>!!!******!!!</h2>
                <img src={thank}/>
                {/* <img src={gorila}/> */}
            </div>
        )
    }
}
export default Close;