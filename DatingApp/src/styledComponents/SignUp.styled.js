import styled from "styled-components";

export const SignUpContainer = styled.div`
  background-color: #fff;
  min-height: 60vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SignUpStyledButton = styled.button`
  border-radius: 30px;
  border-color: orangered;
  border-style: solid;
  background-color: orangered;
  padding: 1px;
`;
export const SignUpStyled = styled.div`
  min-width: 60vw;
  align-items: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 60vh;
  border-radius: 40px;
  color: #fff;

  & input {
    margin: 20px;
    height: 30px;
    width: 60%;
    border-radius: 10px;
    border-bottom: orangered solid;
    border-left: orangered ;
    border-top: #fff;
    border-right: #fff;
  }
  & :active{
 
    border-top: #fff;
    border-right: #fff;
  }
`;
export const SignUpStyledTitle = styled.div`
  color: orangered;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: larger;
  font-weight: bolder;
`;
export const SignUpLoginStyledButton = styled.button`
  background-color: orangered;
  color: white;
  font-size: larger;
  font: 100;
  width: 120px;
  height: 40px;
  align-items: flex-start;
  border-radius: 10px;
  border-color: #fff;
  border: solid;
  justify-content: space-between;
  margin-right: 60px;

`;
export const SignUpStyledRegisterButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  
  ;

  & :hover {
    color: orangered;
   font-style: italic;
    background-color: #fff;
    border-color: orangered;
  }
`;
