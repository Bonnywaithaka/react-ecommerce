import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemBody from "./ItemBody";
import {
  SignUpContainer,
  SignUpLoginStyledButton,
  SignUpStyled,
  SignUpStyledButton,
  SignUpStyledRegisterButton,
  SignUpStyledTitle,
} from "../styledComponents/SignUp.styled";
import { NavBarStyled } from "../styledComponents/NavBar.styled";

const Register = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [users, setUsers] = useState();

  async function AddNewUser(e) {
    if (firstname !== "" && lastname !== "") {
      e.preventDefault();
      alert("Post Added successfull");
      {
        let item = {
          username,
          firstname,
          lastname,
          email,
          password,
          confirmpassword,
        };
        console.log(item);
        let result = await fetch(
          "http://sprinbbootawstestapp-env.eba-cs5nbew8.eu-west-3.elasticbeanstalk.com/addUser",
         // "http://localhost:5000/viewAll",
          {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
              "Content-Type": "application/json",
              Accept: "apllication/json",
            },
          }
        );
        result = await result.json();
        console.log(result);
      }
    } else {
      alert("failed! firstname or lastname or email cant be blank!!!!");
    }
  }

  // const handleClicks = () => {
  //   for (let i = 0; i < users.length; i++) {
  //     if (users[i].username === username) {
  //       if (users[i].password === password) {
  //         navigate("/", { replace: true });
  //       } else {
  //         alert("wrong credentials");
  //       }
  //       break;
  //     } else {
  //       alert("wrong credentials");
  //     }
  //     break;
  //   }
  // };

  return (
    <SignUpContainer>
      <SignUpStyledButton>
        <SignUpStyled>
          <SignUpStyledTitle>
            <h1>Registration Page</h1>
          </SignUpStyledTitle>
          <input
            type="name"
            placeholder="Enter user Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="name"
            placeholder="Enter First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Second Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <SignUpStyledRegisterButton>
            {" "}
            <SignUpLoginStyledButton>Login</SignUpLoginStyledButton>
            <SignUpLoginStyledButton onClick={AddNewUser}>
              Register
            </SignUpLoginStyledButton>{" "}
          </SignUpStyledRegisterButton>
        </SignUpStyled>
      </SignUpStyledButton>
    </SignUpContainer>
  );
};

export default Register;
