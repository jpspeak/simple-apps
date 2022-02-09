import { Box, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import TodoContext from "../../context/todo.context";
import TodosCreate from "./TodosCreate";
import TodosItem from "./TodosItem";

const Todos = () => {
  const { todos } = useContext(TodoContext);
  return (
    <Box maxW='container.sm'>
      <Heading>Todos</Heading>
      <TodosCreate />
      {todos.map(todo => (
        <TodosItem key={todo.id} todo={todo} />
      ))}
    </Box>
  );
};

export default Todos;
