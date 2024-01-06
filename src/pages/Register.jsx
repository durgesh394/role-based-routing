import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const Register = () => {
  const { handleChange, handleSubmit, errors, handleBlur, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter email"),
      password: Yup.string().required("Please enter password"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="resiter-user-container">
      <div className="register-user-header">
        <div className="register-user">
          <div className="login-user">
            <h1>Logo</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-fiels">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-fiels">
              <input
                type="email"
                placeholder="Email"
                value={values.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="input-fiels">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <div className="input-fiels">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="submit-btn">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
