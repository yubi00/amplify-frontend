import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const ConfirmSignUp = () => {
  const history = useHistory();
  const [code, setCode] = useState('');
  const { confirmSignUp, error, loading, user } = useContext(AuthContext);

  const handleConfirmSignup = async (e) => {
    e.preventDefault();
    console.log('user data: ', user);
    await confirmSignUp(user.username, code);
    history.push('/');
  };

  return (
    <form onSubmit={handleConfirmSignup}>
      {error ? (
        error
      ) : (
        <h3>
          An email has been sent to email address. Please type the verification
          code to confirm sign up
        </h3>
      )}
      <input
        type="text"
        placeholder="Verfication Code"
        name="code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />
      <button>{loading ? 'Loading...' : 'Confirm Sign Up'}</button>
    </form>
  );
};

export default ConfirmSignUp;
