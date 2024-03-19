import React, { useState } from 'react';
import { Box, Button, Checkbox, Input, Stack, Text, VStack } from '@chakra-ui/react';
import { useTodoListContext } from '../../hooks/TodoListContext';

const TodoList = () => {
  const { todos, filter, setFilter, addTodo, deleteTodo, toggleTodoCompletion } = useTodoListContext();
  const [newTodo, setNewTodo] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo.trim());
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const handleToggleTodoCompletion = (id) => {
    toggleTodoCompletion(id);
  };

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box p="4" borderWidth="1px" borderRadius="md" marginBottom="4">
      <Input
        placeholder="Search todos"
        value={filter}
        onChange={handleFilterChange}
      />
      <VStack mt="4" align="stretch" spacing="2">
        {filteredTodos.map(todo => (
          <Stack key={todo.id} direction="row" alignItems="center">
            <Checkbox isChecked={todo.completed} onChange={() => handleToggleTodoCompletion(todo.id)} />
            <Text textDecoration={todo.completed ? 'line-through' : 'none'}>{todo.title}</Text>
            <Button size="sm" colorScheme="red" onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
          </Stack>
        ))}
      </VStack>
      <Stack direction="row" mt="4" spacing="2">
        <Input
          placeholder="New Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button onClick={handleAddTodo}>Add Task</Button>
      </Stack>
    </Box>
  );
};

export default TodoList;
