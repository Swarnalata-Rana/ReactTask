import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Navigration extends Component{
    render(){
        return(
            <div>
                <nav style={{marginTop:"5rem",fontSize:"30px"}}>
                    <Link to="/home">Home</Link> &nbsp;&nbsp;
                    <Link to="/login">Login</Link> &nbsp;&nbsp;
                    <Link to="/product">Product</Link> &nbsp;&nbsp;
                    <Link to="/Close">Close</Link> &nbsp;&nbsp;
                </nav>
            </div>
        )
    }
}
export default Navigration;