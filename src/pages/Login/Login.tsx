import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../features/store';
import { userSignIn } from '../../features/userApi/loginThunk';

const Login = () => {
  const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="section">
      <h2>Sign in</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(userSignIn({ email, password }));
        }}
      >
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
