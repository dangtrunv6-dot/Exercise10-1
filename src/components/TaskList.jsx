import React from "react";
import { ListGroup } from "react-bootstrap";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggle, onDelete }) => {
  if (tasks.length === 0) {
    return <p className="text-center text-muted mt-3">Không có công việc nào.</p>;
  }

  return (
    <ListGroup variant="flush">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ListGroup>
  );
};

export default TaskList;