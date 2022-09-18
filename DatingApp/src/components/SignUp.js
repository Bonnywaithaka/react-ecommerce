import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ItemBody from "../components/ItemBody";
import {
  SignUpContainer,
  SignUpLoginStyledButton,
  SignUpStyled,
  SignUpStyledButton,
  SignUpStyledRegisterButton,
  SignUpStyledTitle,
} from "../styledComponents/SignUp.styled";
import { NavBarStyled } from "../styledComponents/NavBar.styled";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const apiGetData = await fetch(
       "http://sprinbbootawstestapp-env.eba-cs5nbew8.eu-west-3.elasticbeanstalk.com/viewAll"
        //"http://localhost:5000/viewAll"
      );
      const res = await apiGetData.json();
      console.log(res);
      setUsers(res);
      // const name = await res.username.json();
      // console.log(name);
      // setUsername(name);
      // setPassword(res.password);
      // console.log(res.map.username);
    };
    getData();
  }, []);

  const handleClicks = () => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        if (users[i].password === password) {
          navigate("/", { replace: true });
          //alert(username);
        } else {
          alert("wrong credentials!!!! Kindly check your username and password:");
        }
        break;
      } else {
        alert("wrong credentials!!!! Kindly check your username and password:");
      }
      break;
    }
  };

  return (
    <SignUpContainer>
      <SignUpStyledButton>
        <SignUpStyled>
          <SignUpStyledTitle>
            <h1>Sign In</h1>
          </SignUpStyledTitle>

          <input
            type="name"
            placeholder="Enter User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SignUpStyledRegisterButton>
            {" "}
            <SignUpLoginStyledButton onClick={handleClicks}>
              Login
            </SignUpLoginStyledButton>
            <Link to="/register">
              <SignUpLoginStyledButton>Register</SignUpLoginStyledButton>
            </Link>
          </SignUpStyledRegisterButton>
          <p>
            <a href="" style={{ color: "blue" }}>
              Forgot Password?
            </a>
          </p>
        </SignUpStyled>
      </SignUpStyledButton>
    </SignUpContainer>
  );
};

export default SignUp;
