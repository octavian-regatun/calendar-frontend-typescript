import { Button, Grid } from "@material-ui/core";
import TitleIcon from "@material-ui/icons/Title";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { CustomTextField } from "../../CustomTextField/CustomTextField";
import styles from "./Form.module.css";

export const Form: React.FC = () => {
  const validationSchema = yup.object({
    title: yup.string().required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className={styles.root} onSubmit={formik.handleSubmit}>
      <Grid container className={styles.container}>
        <Grid item xs={1} className={styles.iconGrid}>
          <TitleIcon />
        </Grid>
        <Grid item xs={11}>
          <CustomTextField
            backgroundColor="#3f51b5"
            textFieldProps={{
              label: "Title",
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
