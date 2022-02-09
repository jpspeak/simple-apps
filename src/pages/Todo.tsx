import { Center } from "@chakra-ui/react";
import NavSpace from "../components/NavSpace";
import Todos from "../components/Todos/Todos";
import { TodoProvider } from "../context/todo.context";

const Todo = () => {
  return (
    <>
      <NavSpace />
      <Center w='full' mt='20' px='4'>
        <TodoProvider>
          <Todos />
        </TodoProvider>
      </Center>
    </>
  );
};

export default Todo;
