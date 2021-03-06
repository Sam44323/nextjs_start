import { useState, useCallback, SyntheticEvent} from 'react';
import styles from './index.module.css';
import jwt from 'jsonwebtoken';
import Link from 'next/link';

export default function Form() {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('You are not logged in!');

  const submitForm = async (event: SyntheticEvent) => {
    event.preventDefault()
    const res = await fetch('http://localhost:3000/api/login', {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    const token = res.token;

    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      setMessage(`Welcome ${json.username}, and you are ${json.admin ? 'an admin!' : 'not an admin!'}`)
    } else {
      setMessage('Something went wrong!')
    }
  }

  return <div>
    <Link href="/sega">SEGA</Link>
    <hr/>
    <Link href="/sega/sonic">SONIC</Link>
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