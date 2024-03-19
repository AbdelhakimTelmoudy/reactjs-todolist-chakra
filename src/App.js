// App.js
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { TodoListProvider } from './hooks/TodoListContext';
import TodoList from './components/todolist/TodoList';

/* const data = [
  { lastName: 'Doe', firstName: 'John', birthDate: '1990-01-01' },
  { lastName: 'Smith', firstName: 'Jane', birthDate: '1992-05-20' },
  { lastName: 'Johnson', firstName: 'Bob', birthDate: '1985-11-15' },
];
 */

const todosData = [
  { id: 1, title: 'Task 1' },
  { id: 2, title: 'Task 2' },
  { id: 3, title: 'Task 3' },
];
const App = () => {
  return (
    // <ChakraProvider>
    //   <FilterProvider>
    //     <FilterComponent data={data} />
    //   </FilterProvider>
    // </ChakraProvider>
    <ChakraProvider>
      <TodoListProvider initialTodos={todosData}>
         <TodoList />
      </TodoListProvider>
  </ChakraProvider>
  );
};

export default App;
