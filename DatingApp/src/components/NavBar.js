import React from "react";
import { Link } from "react-router-dom";
import { RiNotification2Line } from "react-icons/ri";
import {
  NavBarStyled,
  NavBarListStyled,
  ContainerStyled,
} from "../styledComponents/NavBar.styled";

const NavBar = () => {
  return (
    <ContainerStyled>
      <NavBarStyled>
        <ul>
          <li>
            {" "}
            <h2>WoodLy E-Commerce Company</h2>
          </li>
</ul>
<ul>
          <li>
            <Link to="/home">
              <li>Home</li>{" "}
            </Link>
          </li>
          <li>
            <Link to="/">
              <li>sales</li>{" "}
            </Link>
          </li>
          <li>
            <Link to="/contact-us">
              <li>Contact Us</li>{" "}
            </Link>
          </li>
          <li>
            <Link to="/about-us">
              {" "}
              <li>About Us </li>
            </Link>
          </li>
        </ul>
        <ul>
          <ul>
            <li>
              <Link to="/signup">
                <li>Sign-In</li>{" "}
              </Link>
            </li>
            <li>
              Notifications <RiNotification2Line />
            </li>{" "}
          </ul>
        </ul>
      </NavBarStyled>
    </ContainerStyled>
  );
};

export default NavBar;
