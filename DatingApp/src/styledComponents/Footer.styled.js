import styled from "styled-components";
export const FooterStyled = styled.div`
  background-color: orangered;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px;
  border-radius: 10px;
  min-height: 30vh;
  margin-bottom: 5px;

  & ul {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    max-width: 30vw;
  }
`;
export const FooterBodyStyled = styled.div`
display: flex;
flex-direction: column;
align-content: flex-start;
justify-content: center;
margin-left:0px

`;
