import React, { useContext, Fragment, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import ResetPassword from './ResetPassword';
import InputForm from './InputForm';
import Todos from './Todos';

const TodosPage = () => {
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const { user, signOut } = useContext(AuthContext);

  return (
    <Fragment>
      <button onClick={async () => await signOut()}>Logout</button>
      <button onClick={() => setChangePasswordOpen(true)}>
        Change Password
      </button>
      <div>Hello, {user.username}</div>
      {changePasswordOpen ? (
        <ResetPassword setChangePasswordOpen={setChangePasswordOpen} />
      ) : (
        <Fragment>
          <InputForm />
          <Todos />
        </Fragment>
      )}
    </Fragment>
  );
};

export default TodosPage;
