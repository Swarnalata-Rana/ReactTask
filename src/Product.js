import React, { Component } from 'react';
class Product extends Component{
    render(){
        return(
            <div style={{marginTop:"3rem",border:"2px solid black" ,background:"grey",marginLeft:"30rem",marginRight:"30rem"}}> 
                <h2 style={{marginTop:"3rem"}}>Display Navgurukul from The URL</h2>
                <div style={{marginTop:"2rem",fontSize:"25px"}}>
                    <a href="https://navgurukul.org">Click Here</a>
                </div>
            </div>
        )
    }
}
export default Product;