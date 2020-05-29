import React from "react";
import { useFormik } from "formik";
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
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  console.log(formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <label htmlFor="message">Message</label>
        <input
          type="text"
          id="message"
          name="message"
          {...formik.getFieldProps("message")}
        />
        {formik.touched.message && formik.errors.message ? (
          <div>{formik.errors.message}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikForm;
