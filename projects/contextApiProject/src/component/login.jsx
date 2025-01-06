import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContect';

function Login() {
    const [name , setName] = useState('');
    const [password , setPassword] = useState('');

    const {setUser} =useContext (UserContext);


    const handleButton =(e)=>{
        e.preventDefault();
        setUser({name,password});
    }

    return(
        <div>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='username' />
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='text' placeholder='password' />
            <button onClick={handleButton}>Submit</button>
        </div>
    )
}

export default Login