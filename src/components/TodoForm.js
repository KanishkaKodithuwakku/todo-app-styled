import React, { useState } from "react";
import styled from "styled-components";
import { StyledInput } from "../components/StyledInput";
import { ButtonPrimary, Flex } from "../common/Buttons";
const StyledFormWrapper = styled.div`
  background-color: #f7f7f7;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;
const TodoForm = ({ addTodos }) => {
  const [todo, setTodo] = useState("");

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = (todo) => {
    addTodos(todo);
    setTodo("");
  };

  return (
    <StyledFormWrapper>
      <form>
        <Flex>
          <StyledInput type="text" value={todo} onChange={handleOnChange} placeholder="Todo here..."/>
          <ButtonPrimary type="button" onClick={() => handleAddTodo(todo)}>
            Add
          </ButtonPrimary>
        </Flex>
      </form>
    </StyledFormWrapper>
  );
};

export default TodoForm;
