import { AppBar, Grid } from "@material-ui/core";
import AvatarImage from "../../images/Avatar.png";
import { Avatar } from "../Avatar/Avatar";
import { Name } from "./Name/Name";
import styles from "./Navbar.module.css";
import Search from "./Search/Search";
import { Title } from "../Title/Title";

export const Navbar: React.FC = () => {
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
