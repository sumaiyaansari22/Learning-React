import React, {useState, useContext} from 'react';
import UserContext from '../UserContext/UserContext';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const{setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }
  return (
    <div>
        <h2>Login</h2>

        <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" name="username" placeholder='username' id="" />
        {' '}
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="text" name="password" placeholder='password' id="" />
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login