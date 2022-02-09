import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface TodoType {
  id: string;
  title: string;
  completed: boolean;
}

const TodoContext = createContext({
  todos: [] as TodoType[],
  toggleTodo: (todoId: string) => {},
  addTodo: (title: string) => {},
  deleteTodo: (todoId: string) => {}
});

export const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const toggleTodo = (todoId: string) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo = (title: string) => {
    setTodos(prevState => [...prevState, { id: uuidv4(), title, completed: false }]);
  };

  const deleteTodo = (todoId: string) => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const value = { todos, toggleTodo, addTodo, deleteTodo };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoContext;
