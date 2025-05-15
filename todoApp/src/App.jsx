import React, { useEffect, useState } from 'react';
import api from './api';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  // Fetch todos
  const fetchTodos = async () => {
    const res = await api.get('/todos');
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add todo
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const res = await api.post('/todos', { title });
    setTodos([...todos, res.data]);
    setTitle('');
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await api.delete(`/todos/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  // Toggle complete
  const toggleComplete = async (id, currentStatus) => {
    const res = await api.put(`/todos/${id}`, { completed: !currentStatus });
    setTodos(todos.map(todo => (todo._id === id ? res.data : todo)));
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', textAlign: 'center' }}>
      <h1>My TODOs</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add</button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo._id} style={{ marginTop: 10 }}>
            <span
              onClick={() => toggleComplete(todo._id, todo.completed)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                marginRight: 10,
              }}
            >
              {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
