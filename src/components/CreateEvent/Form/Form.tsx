import DateRangeIcon from "@material-ui/icons/DateRange";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SubjectIcon from "@material-ui/icons/Subject";
import TitleIcon from "@material-ui/icons/Title";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import config from "../../../config";
import { LatLon } from "../../../interfaces/latLong.interface";
import { eventsGet } from "../../../store/events/action";
import { Store } from "../../../store/store";
import { CustomButton } from "../../CustomButton/CustomButton";
import { CustomDateTimePicker } from "../../CustomDateTimePicker/CustomDateTimePicker";
import { CustomTextField } from "../../CustomTextField/CustomTextField";
import styles from "./Form.module.css";
import { LocationMap } from "./LocationMap/LocationMap";

interface Values {
  title: string;
  description: string;
  fromDate: Date | null;
  toDate: Date | null;
  location: string;
  latLon?: LatLon;
}

export const Form: React.FC = () => {
  const dispatch = useDispatch();
  const location = useSelector((store: Store) => store.location);

  const validationSchema = yup.object({
    title: yup
      .string()
      .min(0, "Title is required")
      .required("Title is required"),
    fromDate: yup.date().required("From Date is required"),
  });

  const formik = useFormik<Values>({
    initialValues: {
      title: "",
      description: "",
      fromDate: null,
      toDate: null,
      location: "",
      latLon: undefined,
    },
    validationSchema,
    validateOnChange: true,
    onSubmit: async (values) => {
      try {
        formik.values.latLon = location.createEvent.pickedLatLon;

        console.log(values);

        await axios.post(`${config.BACKEND_URI}/api/events`, values);

        dispatch(eventsGet());
      } catch {
        console.log("create event submit error");
      }
    },
  });

  return (
    <form className={styles.root} onSubmit={formik.handleSubmit}>
      <div className={styles.row}>
        <TitleIcon className={styles.icon} />
        <CustomTextField
          backgroundColor="#3f51b5"
          textFieldProps={{
            label: "Title *",
            name: "title",
            fullWidth: true,
            value: formik.values.title,
            error: formik.touched.title && Boolean(formik.errors.title),
            helperText: formik.touched.title && formik.errors.title,
            onChange: formik.handleChange,
          }}
        />
      </div>
      <div className={styles.row}>
        <SubjectIcon className={styles.icon} />
        <CustomTextField
          backgroundColor="#3f51b5"
          textFieldProps={{
            label: "Description",
            name: "description",
            fullWidth: true,
            multiline: true,
            value: formik.values.description,
            onChange: formik.handleChange,
          }}
        />
      </div>
      <div className={styles.row}>
        <DateRangeIcon className={styles.icon} />
        <CustomDateTimePicker
          color="white"
          backgroundColor="#3f51b5"
          dateTimePickerProps={{
            ampm: false,
            clearable: true,
            minutesStep: 15,
            className: styles.fromDate,
            label: "From Date *",
            name: "fromDate",
            inputVariant: "outlined",
            value: formik.values.fromDate,
            error: formik.touched.fromDate && Boolean(formik.errors.fromDate),
            onChange: (x: MaterialUiPickersDate) => {
              formik.setFieldValue("fromDate", x, true);
            },
          }}
        />
        <CustomDateTimePicker
          color="white"
          backgroundColor="#3f51b5"
          dateTimePickerProps={{
            ampm: false,
            clearable: true,
            minutesStep: 15,
            label: "To Date",
            name: "toDate",
            inputVariant: "outlined",
            value: formik.values.toDate,
            onChange: (x: MaterialUiPickersDate) => {
              formik.setFieldValue("toDate", x?.toDate());
            },
          }}
        />
      </div>
      <div className={styles.row}>
        <LocationOnIcon className={styles.icon} />
        <CustomTextField
          backgroundColor="#3f51b5"
          textFieldProps={{
            label: "Location",
            name: "location",
            fullWidth: true,
            multiline: false,
            value: formik.values.location,
            onChange: formik.handleChange,
          }}
        />
      </div>
      <div className={styles.row}>
        <LocationMap />
      </div>
      <div className={`${styles.row} ${styles.buttonRow}`}>
        <CustomButton
          color="white"
          buttonProps={{ variant: "contained", type: "submit" }}
        >
          CREATE EVENT
        </CustomButton>
      </div>
    </form>
  );
};
