import React, { useState } from 'react';

import ModalWindow from '../Modal'
//style
import './style.scss'
const FormLogin =()=>{
    const [name, setName]= useState('');
    const [password, setPassword] = useState('')
    const handleSubmitFromServer = (e) =>{
       e.preventDefault();
       if(name.length === 0){
           console.log('empty');
       }
            console.log('name: ',name);
            console.log('pass: ',password);
    }
    return (
        <>
        {/* { <ModalWindow/>} */}
          
        <div>
            <form className="form-container" onSubmit={handleSubmitFromServer} > 
                <label className="form-container__label"> Login Chat</label>
                <input className="form-container__input" value={name}  onChange={(e)=>setName(e.target.value)} type="text" name="" placeholder="login"/>
                <input className="form-container__input" value={password}  onChange={(e)=>setPassword(e.target.value)} type="text" name="password" placeholder="password"/>
                <button type="submit" className="form-container__button"> Login </button>
            </form>
        <p> may be <a  href="">register</a> user</p>
        </div>
        </>
    );
};


export default FormLogin;