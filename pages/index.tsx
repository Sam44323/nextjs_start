import { useState, useCallback} from 'react';
import styles from './index.module.css';
import jwt from 'jsonwebtoken';

export default function Form() {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('You are not logged in!');

  const submitForm = async (event) => {
    event.preventDefault()
    const res = await fetch('http://localhost:3000/api/login', {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      })
    }).then(response => response.json())
    const token = res.token
    console.log(token)
    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      console.log(json)
      setMessage(`Welcome ${json.username}, and you are ${json.admin ? 'an admin!' : 'not an admin!'}`)
    }
  }

  return <div>
    <h1>{ message}</h1>
    <form >
    <input type="text" value={username} name="username" onChange={e => {
      const value = e.target.value;
      setUserName(value);
    }}/>
    <br />
    <input type="password" value={password} name="password"onChange={e => {
      const value = e.target.value;
      setPassword(value);
    }}/>
    <br />
    <button type="submit" onClick={(e) => submitForm(e)}>Login</button>
  </form>
    </div>
}