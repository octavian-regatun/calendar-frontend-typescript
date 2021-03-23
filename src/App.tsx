import DayJsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import React from "react";
import { Auth } from "./components/Auth/Auth";
import Routes from "./Routes";

const App: React.FC = () => {
  return (
    <MuiPickersUtilsProvider utils={DayJsUtils}>
      <Auth>
        <Routes />
      </Auth>
    </MuiPickersUtilsProvider>
  );
};

export default App;
