import {Link} from 'react-router-dom'
import './Login.css'

export default function details() {
    return (
      <div class="flex-container">
        <div>
          <img src="./lg2.jpg" />
        </div>
        <div id = "bh"><h1>USER<br />LOGIN</h1>
          <p>Welcome to my world</p>
          
          <input placeholder="Enter your username"></input>
       
          <input type="password" placeholder="Enter your password"></input>
        
          <button className = 'lg'><b>LOG IN</b></button>
          <p>or</p>
          <Link to = "/Register" className = "lg"><b>SIGN UP</b></Link>
          
        </div>
      </div>
  
    );
  }