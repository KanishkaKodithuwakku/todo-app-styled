import React, { useState } from "react";
import styled from "styled-components";
import { StyledInput } from "../components/StyledInput";
import { ButtonPrimary, Flex } from "../common/Buttons";

const TodoForm = ({ addTodos }) => {
  const [todo, setTodo] = useState("");

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = (todo) => {
      addTodos(todo)
      setTodo('')
  };

  return (
    <form>
      <Flex>
        <StyledInput type="text" value={todo} onChange={handleOnChange} />
        <ButtonPrimary type="button" onClick={() => handleAddTodo(todo)}>
          Add
        </ButtonPrimary>
      </Flex>
    </form>
  );
};

export default TodoForm;
