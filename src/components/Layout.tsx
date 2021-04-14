import { useMediaQuery } from 'react-responsive';
import Navbar from './Navbar';

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  const isSmallScreen = useMediaQuery({ minWidth: 600 });

  return (
    <>
      {isSmallScreen ? <Navbar /> : null}

      {children}
    </>
  );
};

export default Layout;
