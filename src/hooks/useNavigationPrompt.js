import { useEffect, useState, useContext } from 'react';
import { Prompt } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const useNavigationPrompt = (message = 'Are you sure you want to leave?') => {
  const [isDirty, setDirty] = useState(false);
  const { signOut } = useContext(AuthContext);

  useEffect(() => {
    if (isDirty) {
      window.onbeforeunload = async (e) => {
        await signOut();
      };
    }
    return () => {
      window.onbeforeunload = null;
    };
  }, [isDirty, message, signOut]);

  const navigationPrompt = <Prompt when={isDirty} message={message} />;

  return [navigationPrompt, () => setDirty(true), () => setDirty(false)];
};

export default useNavigationPrompt;
