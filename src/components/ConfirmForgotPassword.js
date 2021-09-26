import { Fragment, useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const initialValues = {
  password: '',
};

const SignUp = () => {
  const history = useHistory();
  const [message, setMessage] = useState('');
  const [values, setValues] = useState(initialValues);
  const { confirmForgotPassword, error, loading, setError } =
    useContext(AuthContext);

  const onChange = (e) => {
    setError('');
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //get username and code from pathname
    const url = new URLSearchParams(window.location.search);
    const code = url.get('confirmation_code');
    const username = url.get('user_name');

    await confirmForgotPassword(username, code, values.password);
    setMessage('Your password has been changed successfully');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reset Password</h2>

      {error && <p> {error} </p>}
      {message ? (
        <h3> {message} </h3>
      ) : (
        <Fragment>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={onChange}
            required
          />
          <button>{loading ? 'Loading...' : 'Change Password'} </button>
        </Fragment>
      )}
      <div>
        <Link to="/">Login</Link>
      </div>
    </form>
  );
};

export default SignUp;
