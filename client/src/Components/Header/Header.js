import React from "react";
import Logo from "./logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
//redux imports
import { useSelector, useDispatch } from "react-redux";
import { signOutAsync } from "../../redux/auth/auth.actions";

const Header = () => {
  const firstName = useSelector((state) => state.auth.userProfile.firstName);
  const lastName = useSelector((state) => state.auth.userProfile.lastName);
  const fullName = `${firstName} ${lastName}`;
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signOutAsync());
  };

  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <div className="user-auth" onClick={signoutHandler}>
        <div className="image-containerAvatar"></div>
        {fullName}
      </div>
    </header>
  );
};
export default Header;
