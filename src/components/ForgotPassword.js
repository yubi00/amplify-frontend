import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const initialValues = {
  username: '',
};

const ForgotPassword = () => {
  const [values, setValues] = useState(initialValues);
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
      <button>{loading ? 'Loading...' : 'Submit'}</button>
    </form>
  );
};

export default ForgotPassword;
