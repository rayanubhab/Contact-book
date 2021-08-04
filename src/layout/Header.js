//TODO: DONE set NavbarBrand to go to home page and export Header

import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const Header = () => {
  return (
    <Navbar color="primary" light>
      <NavbarBrand tag={Link} to="/" className="text-white">
        <AccountBoxIcon/> Contact Book
      </NavbarBrand>
      <NavbarText className="text-white float-right">
        A simple contact management app
      </NavbarText>
    </Navbar>
  );
};

export default Header;
