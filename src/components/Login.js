import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const initialValues = {
  username: '',
  password: '',
};

const Login = () => {
  const [values, setValues] = useState(initialValues);
  const { signIn, error, setError, loading } = useContext(AuthContext);

  const onChange = (e) => {
    setError('');
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(values);
    setValues(initialValues);
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
      <button>{loading ? 'Loading...' : 'Login'}</button>
    </form>
  );
};

export default Login;
