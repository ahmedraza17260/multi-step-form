import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./App.css";

interface Props {
  handleNext: () => void;
}

const FormOne: React.FC<Props> = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yup.object({
        // firstName: Yup.string()
        //   .max(15, "Must be 15 characters or less")
        //   .required("Required"),
        firstName: Yup.string().required("Please enter First Name"),

        lastName: Yup.string().required("Please enter Last Name"),
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          handleNext();
        }, 400);
      }}
    >
      <div className="login__container">
        <Form>
          <h4>
            <label htmlFor="firstName">First Name </label>
          </h4>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" />

          <h4>
            <label htmlFor="lastName">Last Name </label>
          </h4>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />

          <button className="btn" type="submit">
            Submit
          </button>
        </Form>
        <p>
          By signing-in you agree to the terms & Conditions our Privacy Notice,
          our Cookies Notice and our Interest-Based Ads Notice.
        </p>
      </div>
    </Formik>
  );
};

export default FormOne;
