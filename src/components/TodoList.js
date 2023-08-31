import React from "react";
import { StyledList, StyledListItem } from "./StyledLists";
import { ButtonDanger } from "../common/Buttons";
import { styled } from "styled-components";

const StyledListWrapper = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 4px;
`;

const TodoList = ({ todos, removeTodo }) => {
  const handleRemoveItems = (index) => {
    removeTodo(index);
  };
  return (
    <StyledListWrapper>
      <StyledList>
        {todos.map((todo, index) => (
          <StyledListItem key={index}>
            <span>{todo}</span>{" "}
            <ButtonDanger
              type="button"
              onClick={() => handleRemoveItems(index)}
            >
              Remove
            </ButtonDanger>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledListWrapper>
  );
};

export default TodoList;
