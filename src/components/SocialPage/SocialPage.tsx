import { Grid } from "@material-ui/core";
import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";
import { Friends } from "./Friends/Friends";
import styles from "./SocialPage.module.css";

export const SocialPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Grid container className={styles.container}>
        <Grid item md={3}>
          <Friends />
        </Grid>
      </Grid>
    </>
  );
};
