import React from 'react'
import styles from './login.module.css'
import { useState } from 'react'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleData = (e) => {
    if (e.target.type === "email"){
      setEmail(e.target.value);
    } else if (e.target.type === "password"){
      setPassword(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <form className={styles.login_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>로그인</legend>
        
        <label htmlFor="myEmail">email : </label>
        <input type="email" id='myEmail' required value={email} onChange={handleData}/>

        <label htmlFor="myPassword">password : </label>
        <input type="password" id='myPassword' required value={password} onChange={handleData}/>

        <button type='submit' className={styles.btn}>로그인</button>
      </fieldset>
    </form>
  )
}

export default Login