import React from 'react';

const Login = () => {
  return (
    <div className="section">
      <h2>Sign in</h2>
      <form>
        <div>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
      </form>
    </div>
  );
};

export default Login;
