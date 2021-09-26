import { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const initialValues = {
  username: '',
};

const ForgotPassword = () => {
  const [values, setValues] = useState(initialValues);
  const [message, setMessage] = useState('');
  const { forgotPassword, error, setError, loading } = useContext(AuthContext);

  const onChange = (e) => {
    setError('');
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(values.username);
    setValues(initialValues);
    setMessage(
      'Please follow the instructions sent to your email to reset your password'
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      {error && <p> {error} </p>}
      {message ? (
        <h3> {message} </h3>
      ) : (
        <Fragment>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={values.username}
            onChange={onChange}
            required
          />
          <button>{loading ? 'Loading...' : 'Submit'}</button>
        </Fragment>
      )}
      <p>
        <Link to="/">Login Instead</Link>
      </p>
    </form>
  );
};

export default ForgotPassword;
