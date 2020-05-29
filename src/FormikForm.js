import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  message: ""
};

const onSubmit = values => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Required!"),
  message: Yup.string().required("Required!")
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" />
        <label htmlFor="email">Email</label>
        <Field type="text" id="email" name="email" />
        <ErrorMessage name="email" />
        <label htmlFor="message">Message</label>
        <Field type="text" id="message" name="message" />
        <ErrorMessage name="message" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
