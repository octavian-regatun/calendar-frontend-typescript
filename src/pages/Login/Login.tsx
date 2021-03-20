import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import config from "../../config";
import { authSignIn } from "../../store/auth/actions";
import styles from "./Login.module.css";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const googleCallback = async (response: any) => {
    const { tokenId }: { tokenId: string } = response;

    dispatch(authSignIn(tokenId));

    history.push("/calendar");
  };
  return (
    <div className={styles.container}>
      <GoogleLogin
        buttonText="Sign in with Google"
        clientId={config.GOOGLE.CLIENT_ID}
        onSuccess={googleCallback}
        // on failure log to logger backend
        // onFailure={googleCallbackFailure}
        responseType="id_token"
      />
    </div>
  );
};

export default Login;
