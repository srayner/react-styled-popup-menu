import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 10px 10px 0 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  width: 200px;
  position: absolute;
  top: ${props => props.position.top};
  left: ${props => props.position.left};
  border: 1px solid #789;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-font-smoothing: auto;
`;

const Header = styled.div`
  padding: 5px 5px 10px 5px;
  position: relative;
  text-align: center;
  color: #789;
`;

const Title = styled.span``;

const Close = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  width: 22px;
  line-height: 24px;
  ::before {
    content: "\00d7";
    font-size: 22px;
    font-weight: 300;
  }
  :hover {
    color: black;
    cursor: pointer;
  }
`;

const Body = styled.div``;

const List = styled.ul`
  margin: 0;
  padding: 5px 0;
  list-style: none;
  border-top: 1px solid #789;
  font-weight: 500;
`;

const Item = styled.li`
  margin: 0 -10px;
  padding: 5px 15px;
  transition: color 0.1s, background-color 0.1s;

  &:hover {
    color: white;
    background-color: #39e;
    cursor: pointer;
  }
`;

const Menu = props => {
  const lists = props.items.map((list, index) => {
    return (
      <List key={index}>
        {list.map((item, index) => {
          return <Item key={index}>{item}</Item>;
        })}
      </List>
    );
  });
  return (
    <Container position={props.position}>
      <Header>
        <Title>{props.title}</Title>
        <Close />
      </Header>
      <Body>{lists}</Body>
    </Container>
  );
};
export default Menu;
