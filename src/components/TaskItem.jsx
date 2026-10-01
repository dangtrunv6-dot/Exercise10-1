import React from "react";
import { ListGroup, Form, Button } from "react-bootstrap";

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center bg-transparent text-reset">
      <Form.Check
        type="checkbox"
        id={`task-${task.id}`}
        label={
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
          </span>
        }
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <Button variant="danger" size="sm" onClick={() => onDelete(task.id)}>
        Xóa
      </Button>
    </ListGroup.Item>
  );
};

export default TaskItem;