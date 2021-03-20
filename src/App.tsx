import { Auth } from "./components/Auth/Auth";
import Routes from "./Routes";

const App: React.FC = () => {
  return (
    <Auth>
      <Routes />
    </Auth>
  );
};

export default App;
