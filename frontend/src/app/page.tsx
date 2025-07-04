"use client";

import { useEffect, useState } from "react";
import TaskCard from "@/components/TaskCard";

interface Task {
  id: number;
  title: string;
  priority_score: number;
  category: { name: string };
  status: string;
  deadline: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/tasks/")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <main className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Smart Todo Dashboard</h1>

      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks found.</p>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </main>
  );
}
