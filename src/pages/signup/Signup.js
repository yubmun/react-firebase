import React from 'react'
import styles from './signup.module.css'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup';

function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  // displayName 이라는 이름은 Firebase에서 유저 정보에 저장할 수 있는 속성 중 하나이다. 때문에 다른 변수명을 사용해서는 안된다.
  const { error, isPending, signup } = useSignup();

  const handleData = (e) => {
    if (e.target.type === "email"){
      setEmail(e.target.value);
    } else if (e.target.type === "password"){
      setPassword(e.target.value);
    } else if (e.target.type === "text"){
      setDisplayName(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  }

  return (
    <form className={styles.signup_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>로그인</legend>
        
        <label htmlFor="myEmail">email : </label>
        <input type="email" id='myEmail' required value={email} onChange={handleData}/>

        <label htmlFor="myPassword">password : </label>
        <input type="password" id='myPassword' required value={password} onChange={handleData}/>

        <label htmlFor="myNickName">닉네임 : </label>
        <input type="text" id='myNickName' required onChange={handleData} value={displayName} />

        <button type='submit' className={styles.btn}>로그인</button>
      </fieldset>
    </form>
  )
}

export default Signup