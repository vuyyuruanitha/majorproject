/* eslint-disable react/jsx-no-undef */
import React ,{useState} from "react";
// eslint-disable-next-line no-unused-vars
import Registration from "./Registration.js";
import { Link } from "react-router-dom";




import  "./App.css";

function Login(){
    const [text, setText] = useState(" ");
    // eslint-disable-next-line no-unused-vars
    const registerLink = (event) => {
        event.preventDefault(); 
        setText('active'); 
    }
    return(
        <div>

            <div className={`webpage${text}`}>
            
                <div className="login-box">
                    
                    <form onSubmit={(e) => e.preventDefault()}>
                        <h1>Login</h1>
                        <div className="inputbox">
                            <input type="text" placeholder= "Email  or Phoneno"></input>
                            
                        </div>
                        <div className="inputbox">
                            <input type="password" placeholder= "Password"></input>
                            
                        </div>
                        <div className="forgot">
                            
                            <p> Forgot Password?? </p>
                        </div>


                        <button type="submit" ><Link to ="/home" >Login</Link> </button>
                        
                        <div className="regs-link">
                            
                        <p>Don't have an account?{" "} <Link to="/registration">Register</Link><br /></p>
                        </div>
                    </form>
                </div>
            </div>
            {text === 'active' && <Registration />}
            
        </div>
    );
}



export default Login;