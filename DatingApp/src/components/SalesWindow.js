import React, { useState, useEffect } from "react";
import {
  ItemListButtonStyled,
  ItemListContentStyled,
  ItemListImageStyled,
  ItemsContainer,
  ItemsListStyled,
} from "../styledComponents/NavBar.styled";

const SalesWindow = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const apiGetData = await fetch(
        //"https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        "http://sprinbbootawstestapp-env.eba-cs5nbew8.eu-west-3.elasticbeanstalk.com/allPosts"
      );
      const res = await apiGetData.json();
      console.log(res);
      // const name = res.username;
      // console.log(name);
      if (res.length===0) {
        setItems("nothing");
      }setItems(res);
    };
    getData();
  }, []);

  // for (let i=0; i<items.length; i++){
  //   if(items.lenth=0)
  //   items="Nothing to display";
  // }

  return (
    <ItemsContainer>
      {items.map((items) => (
        <ItemsListStyled key={items.data}>
          <ItemListImageStyled>
            <img src={items.image} alt="no image" />
          </ItemListImageStyled>
          <ItemListContentStyled>
            <div>{items.title}</div>
            <div>Ksh {items.price}/=</div>
          </ItemListContentStyled>
          <ItemListButtonStyled>Add To Cart</ItemListButtonStyled>
          --------------------------------------------------------
        </ItemsListStyled>
      ))}
    </ItemsContainer>
  );
};

export default SalesWindow;
