import React, { useState } from "react";
import { Form, Button, InputGroup, Row, Col } from "react-bootstrap";

const TaskForm = ({ onAddTask, filter, setFilter, search, setSearch }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask(title);
    setTitle("");
  };

  return (
    <div className="mb-3">
      {/* Form thêm công việc */}
      <Form onSubmit={handleSubmit} className="mb-3">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Nhập tên công việc "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button type="submit" variant="primary">
            Thêm
          </Button>
        </InputGroup>
      </Form>

      {/* Lọc và Tìm kiếm */}
      <Row className="g-2">
        <Col xs={4}>
          <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Tất cả</option>
            <option value="active">Chưa làm</option>
            <option value="completed">Hoàn thành</option>
          </Form.Select>
        </Col>
        <Col xs={8}>
          <Form.Control
            type="text"
            placeholder="Tìm kiếm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TaskForm;