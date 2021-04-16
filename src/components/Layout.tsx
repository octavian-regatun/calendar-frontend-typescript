import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Sidebar>
        <Navbar />
        <>{children}</>
      </Sidebar>
    </>
  );
};

export default Layout;
