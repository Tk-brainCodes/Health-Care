import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import "./Register.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupAsync } from "../../redux/auth/auth.actions";

const registerSchema = Yup.object().shape({
  firstName: Yup.string().required("first name is required"),
  lastName: Yup.string().required("last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(1, "Password too short!")
    .required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password don't match"
  ),
});

const Register = () => {
  const dispatch = useDispatch();
  return (
    <div className="register">
      <div className="register__now">Login to your account</div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          const { firstName, lastName, email, password, confirmPassword } =
            values;
          if (password !== confirmPassword) {
            //passwords don't match
            return; //or do something
          }
          dispatch(signupAsync({ firstName, lastName, email, password }));
          // console.log({ email: values.email, password: values.password });
          // dispatch(signInAsync(values.email, values.password));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label>Fist Name</label> <br />
            <Field
              id="firstName"
              name="firstName"
              type="text"
              placeholder="enter first name"
            />
            <br />
            <label>Last name</label>
            <br />
            <Field
              id="lastName"
              name="lastName"
              type="text"
              placeholder="enter last name"
            />
            <br />
            <label>Email </label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="enter email address"
            />{" "}
            <br />
            <label>Enter password</label> <br />
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="enter your password"
            />{" "}
            <br />
            <label>Confirm password</label> <br />
            <Field
              name="confirmPassword"
              type="password"
              id="password"
              placeholder="renter password"
            />{" "}
            <br />
            <button
              style={{ display: "block", width: "100%" }}
              className="login"
            >
              Sign up
            </button>
            <br />
            <div className="redirect__route">
              Already have an acoount{" "}
              <Link to="/Login">
                <b style={{ color: " #58A1A4" }}>sign in</b>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
