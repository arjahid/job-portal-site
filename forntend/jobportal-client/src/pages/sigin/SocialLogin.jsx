import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContex/AuthContex';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const {signInGoogle}=useContext(AuthContext);
    const navigate=useNavigate();
    
    
    const handleGoogleSignIn=()=>{
        
        signInGoogle()
        .then((res)=>{
            console.log(res.user);
            if(res.user){
                alert('User logged in successfully');
                navigate('/');
                

            }
        })
        .catch((err)=>{
            console.log(err.message);
            alert('Something went wrong');
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn btn-accent'><FaGoogle></FaGoogle> Google</button>
        </div>
    );
};

export default SocialLogin;