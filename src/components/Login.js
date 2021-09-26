import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHistory, Link } from 'react-router-dom';

const initialValues = {
  username: '',
  password: '',
};

const Login = () => {
  const [values, setValues] = useState(initialValues);
  const { signIn, error, setError, loading } = useContext(AuthContext);
  const history = useHistory();

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
    history.push('/todos');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
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
      <p>
        New user? <Link to="/signup">Sign Up </Link>
      </p>
      <p>
        Forgot password?
        <Link to="/forgot-password">Forgot Password</Link>
      </p>
    </form>
  );
};

export default Login;
