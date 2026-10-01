import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { initialTasks } from "./tasks";

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", initialTasks);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Thêm công việc
  const handleAddTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  // Thay đổi trạng thái completed
  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Xóa công việc
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Đếm thống kê
  const total = tasks.length;
  const activeCount = tasks.filter((t) => !t.completed).length;
  const completedCount = tasks.filter((t) => t.completed).length;

  // Lọc và tìm kiếm
  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "all"
        ? true
        : filter === "completed"
        ? task.completed
        : !task.completed;

    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <Container className="py-4" style={{ maxWidth: "500px" }}>
      <Card className="p-3 shadow-sm bg-body text-body">
        <Header />
        <TaskForm
          onAddTask={handleAddTask}
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />
        
        {/* Thống kê */}
        <div className="d-flex justify-content-between py-2 border-bottom border-top my-2 fw-bold small">
          <span>Tổng: {total}</span>
          <span>Chưa làm: {activeCount}</span>
          <span>Hoàn thành: {completedCount}</span>
        </div>

        <TaskList
          tasks={filteredTasks}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
        />
      </Card>
    </Container>
  );
}

export default App;