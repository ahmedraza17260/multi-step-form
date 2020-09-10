import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./App.css";

interface Props {
  handleNext: () => void;
}

const FormTwo: React.FC<Props> = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{
        occupation: "",
        city: "",
        bio: "",
      }}
      validationSchema={Yup.object({
        // lastName: Yup.string()
        //   .max(20, "Must be 20 characters or less")
        //   .required("Required"),
        occupation: Yup.string().required("Please enter Occupation"),
        city: Yup.string().required("Please enter city name"),
        bio: Yup.string().required("Please enter bio detail"),
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          // setSubmitting(false);
          handleNext();
        }, 400);
      }}
    >
      <div className="login__container">
        <Form>
          <h4>
            <label htmlFor="occupation">Occupation </label>
          </h4>
          <Field name="occupation" type="text" />
          <ErrorMessage name="occupation" />
          <br />

          <h4>
            <label htmlFor="city">City </label>
          </h4>
          <Field name="city" type="text" />
          <ErrorMessage name="city" />
          <br />

          <h4>
            <label htmlFor="bio">Bio </label>
          </h4>
          <Field name="bio" type="text" />
          <ErrorMessage name="bio" />
          <br />

          <button className="btn" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default FormTwo;
