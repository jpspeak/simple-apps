import { Button, HStack, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import TodoContext from "../../context/todo.context";

const TodosCreate = () => {
  const [title, setTitle] = useState("");

  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title) {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <HStack mt='10'>
          <Input
            variant='flushed'
            fontSize='x-large'
            px='4'
            placeholder='Enter your task here'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <Button type='submit' px='8' disabled={!!!title} colorScheme='blue'>
            ADD
          </Button>
        </HStack>
      </form>
    </>
  );
};

export default TodosCreate;
