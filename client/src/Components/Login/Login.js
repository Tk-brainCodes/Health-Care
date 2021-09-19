import React from "react";
import "../Register/Register.css";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  signInAsync,
  clearErrorMessage,
  INVALID_CREDENTIALS,
} from "../../redux/auth/auth.actions";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(1, "Password too short!")
    .required("Password is required"),
});
const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className="register">
      <div className="register__now">Signin</div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          // console.log({ email: values.email, password: values.password });
          dispatch(signInAsync(values.email, values.password));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label>Email</label> <br />
            <Field
              id="email"
              name="email"
              type="email"
              required
              placeholder="enter your email address"
            />
            <br />
            <label>Enter password</label> <br />
            <Field
              id="password"
              name="password"
              required
              type="password"
              placeholder="enter your password"
            />{" "}
            <br />
            <button
              style={{ display: "block", width: "100%" }}
              className="login"
            >
              Log in
            </button>
            <br />
            <div className="redirect__route">
              Don't have an account{" "}
              <Link to="/register">
                <b style={{ color: " #58A1A4" }}>sign up</b>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
