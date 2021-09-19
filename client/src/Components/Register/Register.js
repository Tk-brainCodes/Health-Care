import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import "./Register.css";
import { Link } from "react-router-dom";

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
  return (
    <div className="register">
      <div className="register__now">Login to your account</div>
      <form>
        <label>Fist Name</label> <br />
        <input id="firname" type="text" placeholder="enter first name" />
        <br />
        <label>Last name</label>
        <br />
        <input id="lastname" type="text" placeholder="enter last name" />
        <br />
        <label>Email </label>
        <input type="email" id="email" placeholder="enter email address" />{" "}
        <br />
        <label>Enter password</label> <br />
        <input
          id="password"
          type="password"
          placeholder="enter your password"
        />{" "}
        <br />
        <label>Confirm password</label> <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="renter password"
        />{" "}
        <br />
        <div className="login">Sign up</div>
        <br />
        <div className="redirect__route">
          Already have an acoount{" "}
          <Link to="/Login">
            <b style={{ color: " #58A1A4" }}>sign in</b>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
