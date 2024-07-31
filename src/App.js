import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, deleteTodo, updateTodo } from './redux/todoSlice';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';
import './style.css';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  const handleAddNote = (newNote) => {
    dispatch(addTodo({
      id: todos.length ? todos[0].id + 1 : 1, 
      todo: newNote.title,
    }));
  };

  const handleDeleteNote = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditNote = (id, title) => {
    dispatch(updateTodo({ id, todo: title }));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAddNote} />
      {todos.map((todo) => (
        <Note
          key={todo.id}
          id={todo.id}
          title={todo.todo}
          onDelete={handleDeleteNote}
          onEdit={handleEditNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
