import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const initialValues = {
  username: '',
  password: '',
  code: '',
};

const SignUp = () => {
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
    await confirmForgotPassword(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p> {error} </p>}
      <input
        type="text"
        name="username"
        placeholder="username"
        value={values.username}
        onChange={onChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={onChange}
        required
      />
      <input
        type="text"
        name="code"
        placeholder="code"
        value={values.code}
        onChange={onChange}
        required
      />
      <button>{loading ? 'Loading...' : 'Change Password'} </button>
    </form>
  );
};

export default SignUp;
