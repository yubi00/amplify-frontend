import React, { useContext, Fragment, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import ResetPassword from './ResetPassword';
import InputForm from './InputForm';
import Todos from './Todos';
import useNavigationPrompt from '../hooks/useNavigationPrompt';

const TodosPage = () => {
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const { user, signOut } = useContext(AuthContext);
  const [Prompt, setDirty] = useNavigationPrompt(
    'Are you sure you want to leave?'
  );

  useEffect(() => {
    setDirty();
  }, []);

  return (
    <Fragment>
      <button
        onClick={async () => {
          await signOut();
        }}
      >
        Logout
      </button>
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
      {Prompt}
    </Fragment>
  );
};

export default TodosPage;
