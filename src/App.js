import React, { useState } from "react";
import styled from "styled-components";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Title } from "./components/Title";
import GlobalStyles from "./common/GlobalStyles";
import { Flex } from "./common/Buttons";
import { Alert } from "./common/Alert";

const MainWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-sizing: border-box;
  /* overflow: hidden; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  width: 600px;
  padding: 10px;

  /* Centering Styles */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Badge = styled.span`
  background-color: var(--color-pills);
  color: var(--color-white);
  border-radius: 50%;
  display: inline-flex;
  align-items: center; // vertically align
  justify-content: center; // horizontally align
  height: 20px;
  width: 20px;
  font-size: 12px;
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  const getTodoCount = () => {
    return todos.length;
  };

  const todoExists = (newTodo) => {
    return todos.some((todo) => todo === newTodo);
  };

  const addTodos = (todo) => {
    if (todo.trim() === "") {
      setError("Todo cannot be empty!");
      return;
    }

    if (!todoExists(todo)) {
      const update = [...todos, todo];
      setTodos(update);
      setError("");
    } else {
      setError("Todo already exists");
      // console.log("Todo already exists");
    }
  };

  const removeTodo = (index) => {
    const update = todos.filter((todo, todoIndex) => todoIndex !== index);
    console.log(update);
    setTodos(update);
  };

  return (
    <MainWrapper>
      <Flex>
        <Title>Todo App </Title>
        <Badge>{getTodoCount()}</Badge>
      </Flex>

      {error && <Alert className="alert-danger">{error}</Alert>}

      <TodoForm addTodos={addTodos} />
      <hr></hr>
      <TodoList todos={todos} removeTodo={removeTodo} />
      <GlobalStyles />
    </MainWrapper>
  );
}

export default App;
