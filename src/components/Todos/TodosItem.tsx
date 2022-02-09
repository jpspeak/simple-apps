import { SmallCloseIcon } from "@chakra-ui/icons";
import { Checkbox, Flex, FormLabel, IconButton } from "@chakra-ui/react";
import { useContext } from "react";
import TodoContext, { TodoType } from "../../context/todo.context";

const TodosItem = ({ todo }: { todo: TodoType }) => {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <>
      <Flex w='full' shadow='base' alignItems='center' px='4' mt='4'>
        <FormLabel
          htmlFor={todo.id}
          textDecor={`${todo.completed ? "line-through" : ""}`}
          cursor='pointer'
          flexGrow='1'
          py='4'
          m='0'
          mr='4'
        >
          {todo.title}
        </FormLabel>
        <Checkbox
          id={todo.id}
          mr='2'
          onChange={() => toggleTodo(todo.id)}
          checked={todo.completed}
        />
        <IconButton
          aria-label='delete'
          size='xs'
          variant='ghost'
          onClick={() => deleteTodo(todo.id)}
          icon={<SmallCloseIcon fontSize='lg' />}
        />
      </Flex>
    </>
  );
};

export default TodosItem;
