const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-2 border-b">
      <span className={task.completed ? "line-through text-gray-500" : ""}>
        {task.text}
      </span>
      <div>
        <button onClick={() => onToggle(task.id)} className="mr-2 text-green-500">✔</button>
        <button onClick={() => onDelete(task.id)} className="text-red-500">✘</button>
      </div>
    </div>
  );
};

export default TaskItem;
