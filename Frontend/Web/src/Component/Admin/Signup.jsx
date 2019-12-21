import React,{useState} from 'react';

import { Link } from 'react-router-dom';


export default function Signup(){

    const [User, SetUser] = useState("");
    const [Mail, SetMail] = useState("");
    const [Pass, SetPass] = useState("");

    return(
        <div className="BodSignup">
            
            <div className="Box">
                
                <div className="Txt-title">
                    <span className="Txt-big">SIGN UP</span>
                </div>
                <span className="Txt-desc">
                    Make your server code to make it easier for someone to find you
                    Let's create an account now!
                </span>
                
                <div className="Form-group">
                    
                    <div className="Txt-label">
                        <label>Pemilo Code</label>
                    </div>
                    <input className="Form-input" type="text" value={User} onChange={(e)=>{SetUser(e.target.value)}} />

                    <div className="Txt-label">
                        <label>Email</label>
                    </div>                    
                    <input className="Form-input" type="email" value={Mail} onChange={(e)=>{SetMail(e.target.value)}} />

                    <div className="Txt-label">
                        <label>Password</label>
                    </div>
                    <input className="Form-input" type="password" value={Pass} onChange={(e)=>{SetPass(e.target.value)}} />                                        
                    
                    <div className="Btn-part">
                        <button className="BtnSignup">
                            Sign up for Pemilo.id
                        </button>   
                        <span>
                            Already have an account? <Link to="/">Sign in</Link>
                        </span>
                    </div>
                    
                    <div className="Terms-part">
                        <span className="Txt-terms">
                            By clicking “Sign up for Pemilo.id”, you agree to our Terms of Service and Privacy Statement. We’ll occasionally send you account related emails.
                        </span>
                    </div>

                </div>

            </div>

        </div>
    );
}