import styled from "styled-components";
import { useState } from "react";
import { IoChevronForwardCircleSharp } from "react-icons/io5";

const Test = () => {
  const imageData = [
    {
      link: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "STRENGTH",
    },
    {
      link: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "MOBILITY",
    },
    {
      link: "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "DRILLS",
    },
  ];

  const [hover, setHover] = useState(0);
  const [visible, setVisible] = useState(true);

  return (
    <TestStyle>
      <ImageContainerStyle>
        {imageData.map((e, index) => {
          return (
            <ImageCardStyle
              key={index}
              onMouseEnter={() => {
                setHover(index);
                setVisible(true);
              }}
              onMouseLeave={() => {
                setVisible(false);
              }}
              style={{ flex: hover === index ? "1 1 30%" : "1" }}
            >
              <span>
                <h2>{e.title}</h2>
                <IoChevronForwardCircleSharp
                  className="icon"
                  style={{ display: visible && hover === index ? "" : "none" }}
                />
              </span>
              <img
                src={e.link}
                alt=""
                width={hover === index ? "100%" : "200%"}
              />
            </ImageCardStyle>
          );
        })}
      </ImageContainerStyle>
    </TestStyle>
  );
};

const TestStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 10rem;
  overflow: hidden;
`;

const ImageContainerStyle = styled.div`
  display: flex;
  overflow: hidden;
  border: 1px solid #000;
  border-radius: 2rem;
  height: 100%;
`;

const ImageCardStyle = styled.div`
  flex: 1;
  transition: 400ms all ease;
  position: relative;
  img {
    height: 100%;
    object-fit: cover;
    transition: 400ms all ease;
    filter: brightness(70%);
  }
  span {
    h2 {
      font-weight: 100;
    }
    z-index: 5;
    color: #fff;
    width: 90%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    margin-left: 1rem;
    margin-top: 1rem;
  }
  .icon {
    font-size: 2rem;
  }
`;

export default Test;
