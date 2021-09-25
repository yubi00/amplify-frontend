import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const initialValues = {
  oldPassword: '',
  newPassword: '',
};

const ResetPassword = ({ setChangePasswordOpen }) => {
  const [values, setValues] = useState(initialValues);
  const { changePassword, error, setError, loading } = useContext(AuthContext);

  const onChange = (e) => {
    setError('');
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await changePassword(values);
    setValues(initialValues);
    setChangePasswordOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p> {error} </p>}
      <input
        type="text"
        name="oldPassword"
        placeholder="oldPassword"
        value={values.oldPassword}
        onChange={onChange}
        required
      />
      <input
        type="password"
        name="newPassword"
        placeholder="newPassword"
        value={values.newPassword}
        onChange={onChange}
        required
      />
      <button>{loading ? 'Loading...' : 'Change Password'}</button>
    </form>
  );
};

export default ResetPassword;
