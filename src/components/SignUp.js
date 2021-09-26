import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const initialValues = {
  username: '',
  password: '',
  email: '',
};

const SignUp = () => {
  const history = useHistory();
  const [values, setValues] = useState(initialValues);
  const { signUp, error, loading, setError } = useContext(AuthContext);

  const onChange = (e) => {
    setError('');
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(values);
    history.push('/confirm-signup');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
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
        name="email"
        placeholder="email"
        value={values.email}
        onChange={onChange}
        required
      />
      <button>{loading ? 'Loading...' : 'Sign Up'} </button>
      <p>
        <Link to="/">Login Instead</Link>
      </p>
    </form>
  );
};

export default SignUp;
