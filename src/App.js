
import './App.css';
import Home from './Home';
import Product from './Product';
import Login from './Login';
import Navigration from './Navigration';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Close from './Close';
function App() {
  return (
    <div className="App">
      {/* <h1>HELLO HEADER DEVLOPMENT</h1> */}

      {/* <header className="App-header"> */}
        <h1 style={{marginTop:"5rem",border:"2px solid black" ,background:"grey",fontSize:"40px"}}>WELCOME TO REACT SPA DEVELOPMENT</h1>
      <BrowserRouter>
      <Navigration/>
      <Routes>
        <Route path='/home' element={<Home/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/product' element={<Product/>} ></Route>
        <Route path='/close' element={<Close/>} ></Route>
    
      </Routes>
      </BrowserRouter>
      {/* </header> */}
    </div>
  );
}
export default App;




