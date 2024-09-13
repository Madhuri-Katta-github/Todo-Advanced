import { createContext, useEffect, useState } from "react";
import { TodoObj } from "../library/types";

type TodosContextProviderProps = {
  children: React.ReactNode;
}

type TodosContextProps = {
  todos: TodoObj[],
  setTodos: React.Dispatch<React.SetStateAction<TodoObj[]>>,
  countCompletedTodos: number,
  handleAddTodo: (todoText: string) => void,
  handleDeleteTodo: (id: number) => void,
  handleToggle: (id: number) => void,
}

const getInitialTodos=()=>{
  const saveTodos=localStorage.getItem("todos");
  if(saveTodos){
    return JSON.parse(saveTodos);
  }else{
    return [];
  }
}


export const TodosContext = createContext<TodosContextProps | null>(null);

export default function TodosContextProvider({ children }: TodosContextProviderProps) {
  const [todos, setTodos] = useState<TodoObj[]>(getInitialTodos)

  const countCompletedTodos = todos.filter(todo => todo.isDone).length

  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3) {
      alert("Log in to add more than 3 todos");
      return;
    } else {
      setTodos(prev => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isDone: false
        }
      ]);
    }
  }

  const handleDeleteTodo = (id: number) => {
    setTodos((prev: any[]) => prev.filter((todo) => todo.id !== id))
  }

  const handleToggle = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));

    // setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
  }

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        countCompletedTodos,
        handleAddTodo,
        handleDeleteTodo,
        handleToggle,
      }}
    >
      {children}
    </TodosContext.Provider>

  )
}
