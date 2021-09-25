import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const initialValues = {
  username: '',
  password: '',
  email: '',
};

const SignUp = () => {
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
        name="email"
        placeholder="email"
        value={values.email}
        onChange={onChange}
        required
      />
      <button>{loading ? 'Loading...' : 'Sign Up'} </button>
    </form>
  );
};

export default SignUp;
