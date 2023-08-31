import React from "react";
import { StyledList, StyledListItem } from "./StyledLists";
import { ButtonDanger} from "../common/Buttons";

const TodoList = ({ todos, removeTodo }) => {
  const handleRemoveItems = (index) => {
    removeTodo(index);
  };
  return (
    <StyledList>
      {todos.map((todo, index) => (
        <StyledListItem key={index}>
          <span>{todo}</span>{" "}
          <ButtonDanger type="button" onClick={() => handleRemoveItems(index)}>
            Remove
          </ButtonDanger>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default TodoList;
