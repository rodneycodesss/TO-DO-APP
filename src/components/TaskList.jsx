import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  return (
    <div className="mt-4">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
