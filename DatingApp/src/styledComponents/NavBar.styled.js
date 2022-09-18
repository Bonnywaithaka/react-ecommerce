import styled from "styled-components";

export const ContainerStyled = styled.div`
  & li :active {
    background-color: red;
    color: white;
  }

  & li :hover {
    background-color: white;
    color: black;
    border-radius: 10px;
    padding: 10px;
    text-decoration: none;
  }
`;
export const NavBarStyled = styled.div`
  margin: 20px;
  min-height: 70px;
  display: flex;
  justify-content: space-around;
  background: orangered;
  color: white;
  border-radius: 20px;
  border-top-left-radius: 500px;

  & ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 0 1rem;
    color: white;
    list-style: none;
    list-style: none;
  }
  & li {
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    list-style: none;
    text-decoration: none;
  }

  & li :hover {
    background-color: white;
    color: black;
    border-radius: 10px;
    padding: 10px;
    text-decoration: none;
  }
  & li :active {
    background-color: red;
    color: #fff;
  }
`;
export const NavBarListStyled = styled.ul`
  background-color: black;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 0 1rem;
  color: white;
`;
export const ItemBodyContainer = styled.div`
  margin-top: 5px;
  margin: 20px;
  background-color: #fff;
  align-content: flex-start;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
export const ItemBodyStyled = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: 70vh;
  width: 90vw;
  border-radius: 20px;
  margin: 20px;
  background: #fff;
  column-count: 2;
`;
export const ItemBodyImageStyled = styled.div`
  margin: 10px;
  align-content: flex-start;

  border-radius: 200px;
  justify-content: flex-start;
  & img {
    border-radius: 20px;
    margin-right: 5px;
    max-width: 50vw;
    min-width: 40vw;
    height: 50vh;
  }
`;
export const ItemBodyDetailsStyled = styled.div`
  background-color: white;
  align-content: flex-start;
  align-items: flex-start;
  background-color: #fff;
  margin-right: 4px;
  min-width: 50vw;

  & h2,
  p {
    text-decoration: none;
    font-size: larger;
  }
  & button :hover {
    background-color: #fff;
    color: purple;
  }
`;
export const ItemBodyButtonStyled = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 20px;
  background-color: purple;
  color: #fff;
  font-size: larger;
  margin-right: 50px;

  & :hover {
  }
`;
export const ItemBodyStyledContent = styled.div`
  max-width: 60vw;
  min-height: 20vh;
  background-color: #fff;
  margin: 10px;
  scroll-behavior: smooth;
`;

export const FooterStyled = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
`;

export const ItemsContainer = styled.div`
  margin: 20px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0 4px;
  flex-direction: row;
  min-height: 80vh;
  max-width: 100vw;
  background-color: #fff;
`;
export const ItemsListStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
  background-color: #fff;
  max-width: 50vw;
  max-height: 70vh;
  min-width: 30vw;
  min-height: 20vh;
`;
export const ItemListImageStyled = styled.div`
  display: flex;
  margin: 10px;

  & img {
    border-radius: 20px;
    margin-right: 5px;
    max-width: 35vw;
    min-width: 5vw;
    height: 40vh;
  }
`;
export const ItemListContentStyled = styled.div`
  font-size: larger;
  font-style: italic;
  font-weight: bold;
  background-color: #fff;
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  min-height: 60px;
`;
export const ItemListButtonStyled = styled.button`
  background-color: #fff;
  color: orangered;
  width: 21vw;
  height: 4vh;
  border-radius: 20px;
  border: orangered solid;

  &:hover {
    background-color: orangered;
    color: #fff;
    
  }
`;
