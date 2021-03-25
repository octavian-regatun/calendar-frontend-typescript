import { AppBar, Button, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AvatarImage from "../../images/Avatar.png";
import { Avatar } from "../Avatar/Avatar";
import { Title } from "../Title/Title";
import { Name } from "./Name/Name";
import styles from "./Navbar.module.css";
import Search from "./Search/Search";

export const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = (): void => {
    localStorage.removeItem("token");

    history.push("/");
  };

  return (
    <AppBar position="sticky" color="inherit" className={styles.navbar}>
      <Grid container className={styles.container}>
        <Grid item md={3} className={styles.leftGrid}>
          <Search />
        </Grid>
        <Grid item md={6} className={styles.middleGrid}>
          <Title
            text="Calendar"
            variant="h2"
            color="main"
            className={styles.title}
          />
        </Grid>
        <Grid item md={3} className={styles.rightGrid}>
          <Button
            variant="contained"
            color="secondary"
            className={styles.logout}
            onClick={handleLogout}
          >
            LOG OUT
          </Button>
          <Avatar
            alt="profile picture"
            size={50}
            src={AvatarImage}
            className={styles.avatar}
          />
          <Name className={styles.name} />
        </Grid>
      </Grid>
    </AppBar>
  );
};
