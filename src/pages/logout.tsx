import { redirectToLogin } from '@/lib/redirect';
import { useUserState } from '@/lib/store';
import { useEffect } from 'react';

const LogoutNextPage: React.FC = () => {
  const deleteUser = useUserState(state => state.deleteUser);

  function logout(): void {
    deleteUser();

    localStorage.removeItem('token');
  }

  useEffect(() => {
    logout();

    redirectToLogin();
  });

  return <div></div>;
};
export default LogoutNextPage;
