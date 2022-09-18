import React, { useEffect, useState } from "react";
import {
  ItemBodyContainer,
  ItemBodyStyled,
  ItemBodyDetailsStyled,
  ItemBodyImageStyled,
  ItemBodyButtonStyled,
  ItemBodyStyledContent,
} from "../styledComponents/NavBar.styled";

const ItemBody = () => {
  const [content, setContent] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const getData = async () => {
      const apiGetData = await fetch(
        //"https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        "http://localhost:8080/allPosts"
      );
      const res = await apiGetData.json();
      console.log(res);
      // const name = res.username;
      // console.log(name);
      setContent(res);
    };
    getData();
  }, []);

  const DeletedPost = async (id) => {
    useEffect(() => {
      // DELETE request using fetch with async/await
      async function DeletePost() {
        await fetch("http://localhost:8080/delete/${id}");
        setStatus("Delete successful");
      }

      DeletePost();
    }, []);
  };

  return (
    <div>
      <ItemBodyContainer>
        {content.map((contents) => (
          <ItemBodyStyled>
            <ItemBodyImageStyled>
              {" "}
              <img src={contents.image} alt="no image for the topic" />
            </ItemBodyImageStyled>
            <ItemBodyDetailsStyled>
              <h2>Title:{contents.title}</h2>
              <h2>Age: 7yrs</h2>
              <p>Country:USA</p>

              <ItemBodyStyledContent>
                <p>{contents.content}</p>
              </ItemBodyStyledContent>
              {/* <p>
                Dating app users could use an external video conferencing tool
                such as Zoom, Google Meet, or Facetime to digitally connect
                before they meet up in person. But these options require sharing
                information such as your phone number or email address, which
                app users may not want to give out to someone they don’t know.
              </p>
              <p>
                Dating app users could use an external video conferencing tool
                such as Zoom, Google Meet, or Facetime to digitally connect
                before they meet up in person. But these options require sharing
                information such as your phone number or email address, which
                app users may not want to give out to someone they don’t know.
              </p> */}
              <ItemBodyButtonStyled>Edit</ItemBodyButtonStyled>
              <ItemBodyButtonStyled onClick={() => DeletedPost(contents.id)}>
                Delete
              </ItemBodyButtonStyled>
            </ItemBodyDetailsStyled>
          </ItemBodyStyled>
        ))}
      </ItemBodyContainer>
    </div>
  );
};

export default ItemBody;
