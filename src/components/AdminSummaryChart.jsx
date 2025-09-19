import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { studentsData } from "../mockData";

function AdminSummaryChart() {
  const counts = { Low: 0, Medium: 0, High: 0 };

  studentsData.forEach((s) => {
    const avgScore = s.scores.reduce((a, b) => a + b, 0) / s.scores.length;
    const avgAttendance = s.attendance.reduce((a, b) => a + b, 0) / s.attendance.length;

    let risk = "Low";
    if (avgScore < 60 || avgAttendance < 70) risk = "Medium";
    if (avgScore < 45 || avgAttendance < 50 || !s.feesPaid) risk = "High";
    counts[risk]++;
  });

  const data = [
    { name: "Low Risk", value: counts.Low },
    { name: "Medium Risk", value: counts.Medium },
    { name: "High Risk", value: counts.High },
  ];

  const COLORS = ["#22c55e", "#facc15", "#ef4444"];

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <h3 className="text-lg font-bold mb-4">Risk Summary</h3>
      <PieChart width={400} height={250}>
        <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={80}>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default AdminSummaryChart;
