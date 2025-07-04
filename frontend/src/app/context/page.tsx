"use client";

import { useEffect, useState } from "react";

interface ContextEntry {
  id: number;
  content: string;
  source_type: string;
  created_at: string;
}

export default function ContextPage() {
  const [content, setContent] = useState("");
  const [source, setSource] = useState("note");
  const [entries, setEntries] = useState<ContextEntry[]>([]);

  const fetchEntries = async () => {
    const res = await fetch("http://localhost:8000/api/contexts/");
    const data = await res.json();
    setEntries(data);
  };

  const handleSubmit = async () => {
    await fetch("http://localhost:8000/api/contexts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, source_type: source }),
    });
    setContent("");
    fetchEntries();
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <main className="p-6 max-w-3xl mx-auto space-y-4 bg-gray-50 text-black min-h-screen">
      <h1 className="text-2xl font-bold">📝 Daily Context Input</h1>

      <textarea
        className="w-full border p-2 rounded bg-white text-black"
        rows={3}
        placeholder="Paste a note, message, or email here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="flex gap-4 items-center">
        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="border px-2 py-1 rounded bg-white text-black"
        >
          <option value="note">Note</option>
          <option value="email">Email</option>
          <option value="whatsapp">WhatsApp</option>
        </select>

        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Submit Context
        </button>
      </div>

      <hr />

      <h2 className="text-xl font-semibold">Recent Context Entries</h2>
      <ul className="space-y-3">
        {entries.map((entry) => (
          <li
            key={entry.id}
            className="bg-white border p-3 rounded shadow-sm text-sm"
          >
            <p className="font-medium text-indigo-600">
              [{entry.source_type.toUpperCase()}]
            </p>
            <p className="text-gray-700">{entry.content}</p>
            <p className="text-xs text-gray-500">
              {new Date(entry.created_at).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
