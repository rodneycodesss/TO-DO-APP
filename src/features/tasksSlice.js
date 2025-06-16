import { useState } from 'react';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks(prev => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return { tasks, addTask, deleteTask, toggleTask };
};
