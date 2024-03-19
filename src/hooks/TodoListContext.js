import React, { createContext, useContext, useState } from 'react';

const TodoListContext = createContext();

export const TodoListProvider = ({ children, initialTodos }) => {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState('');

  const addTodo = (title) => {
    setTodos([...todos, { id: todos.length + 1, title, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodoCompletion = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <TodoListContext.Provider value={{ todos, filter, setFilter, addTodo, deleteTodo, toggleTodoCompletion }}>
      {children}
    </TodoListContext.Provider>
  );
};

export const useTodoListContext = () => useContext(TodoListContext);
