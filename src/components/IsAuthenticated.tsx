import { redirectToLogin } from '@/lib/redirect';
import { useUserState } from '@/lib/store';

interface Props {
  children: JSX.Element;
}

const IsAuthenticated: React.FC<Props> = ({ children }) => {
  const user = useUserState(state => state.user);

  if (!user) {
    redirectToLogin();
  }

  return user ? children : null;
};

export default IsAuthenticated;
