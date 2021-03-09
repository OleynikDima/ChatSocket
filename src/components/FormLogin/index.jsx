import React, { useState } from 'react';


//style
import './style.scss'
const FormLogin =()=>{
    const [name, setName]= useState('');
    const [password, setPassword] = useState('')
    const handleSubmitFromServer = (e) =>{
       e.preventDefault();
       if(name.length === 0){
           
       }
            console.log('name: ',name);
            console.log('pass: ',password);
    }
    return (
        <div>
            <form className="form-container" onSubmit={handleSubmitFromServer} > 
                <label className="form-container__label"> Login Chat</label>
                <input className="form-container__input" value={name}  onChange={(e)=>setName(e.target.value)} type="text" name="" placeholder="login"/>
                <input className="form-container__input" value={password}  onChange={(e)=>setPassword(e.target.value)} type="text" name="password" placeholder="password"/>
                <button type="submit" className="form-container__button"> Login </button>
            </form>
        </div>
    );
};


export default FormLogin;