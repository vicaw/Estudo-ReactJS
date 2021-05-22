import React from "react";
import styled from "styled-components";
import ImageFilter from "../ImageFilter";

const Item = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: grid;
  grid-template:
    ". . ." auto
    /1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  padding: 10px;
  font-size: 12px;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  .text {
    font-weight: bold;
  }
  width: 100px;
`;

export default ({ extrato }) => {
  return (
    <Item>
      {ImageFilter(extrato.type)}
      <ItemInfo>
        <span className="text">{extrato.type}</span>
        <span>{extrato.from}</span>
        <span>{extrato.value}</span>
      </ItemInfo>
      <span>{extrato.date}</span>
    </Item>
  );
};
