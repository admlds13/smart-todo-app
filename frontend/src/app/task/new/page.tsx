"use client";

import { useState } from "react";

export default function NewTaskPage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [suggestion, setSuggestion] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const getSuggestion = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:8000/api/ai/suggest/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description: desc }),
    });
    const data = await res.json();
    setSuggestion(data);
    setLoading(false);
  };

  const saveTask = async () => {
    const res = await fetch("http://localhost:8000/api/tasks/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description: suggestion?.enhanced_description || desc,
        priority_score: suggestion?.priority_score,
        deadline: suggestion?.suggested_deadline,
        status: "pending",
      }),
    });
    if (res.ok) setSaved(true);
  };

  return (
    <main className="p-6 max-w-xl mx-auto space-y-4 bg-gray-50 min-h-screen text-black">    
      <h1 className="text-2xl font-bold">Create New Task</h1>

      <input
  className="w-full border border-gray-300 p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
  placeholder="Task title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>

<textarea
  className="w-full border border-gray-300 p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
  rows={4}
  placeholder="Task description"
  value={desc}
  onChange={(e) => setDesc(e.target.value)}
/>

      <button
        onClick={getSuggestion}
        disabled={loading}
        className="bg-indigo-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Getting AI Suggestions..." : "Get AI Suggestions"}
      </button>

      {suggestion && (
        <div className="bg-gray-100 p-4 rounded shadow space-y-1">
          <p><strong>Priority:</strong> {suggestion.priority_score}</p>
          <p><strong>Deadline:</strong> {suggestion.suggested_deadline}</p>
          <p><strong>Category:</strong> {suggestion.category}</p>
          <p><strong>Description:</strong> {suggestion.enhanced_description}</p>
        </div>
      )}

      {suggestion && !saved && (
        <button
          onClick={saveTask}
          className="bg-green-600 text-white px-4 py-2 rounded mt-3"
        >
          Save Task
        </button>
      )}

      {saved && <p className="text-green-600">✅ Task saved!</p>}
    </main>
  );
}
