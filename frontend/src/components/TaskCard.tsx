interface Task {
  id: number;
  title: string;
  priority_score: number;
  category: { name: string };
  status: string;
  deadline: string;
}

export default function TaskCard({ task }: { task: Task }) {
  const priorityColor =
    task.priority_score >= 80
      ? "bg-red-500"
      : task.priority_score >= 50
      ? "bg-yellow-400"
      : "bg-green-400";

  return (
    <div className="border rounded-xl p-4 shadow-sm flex justify-between items-center">
      <div>
        <h3 className="font-semibold text-lg">{task.title}</h3>
        <p className="text-sm text-gray-600">
          {task.category?.name || "Uncategorized"} | {task.status}
        </p>
        <p className="text-xs text-gray-500">Deadline: {task.deadline}</p>
      </div>
      <span
        className={`text-white text-xs px-3 py-1 rounded-full ${priorityColor}`}
      >
        Priority: {task.priority_score}
      </span>
    </div>
  );
}
