import { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

function RiskChart({ student }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (!student) return;
    const data = student.scores.map((score, i) => ({
      week: `Week ${i + 1}`,
      score,
      attendance: student.attendance[i],
    }));
    setChartData(data);
  }, [student]);

  if (!student) {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-bold mb-4">Performance Trend</h3>
        <p className="text-gray-500">Select a student to view performance</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">Performance Trend – {student.name}</h3>
      <LineChart width={400} height={250} data={chartData}>
        <Line type="monotone" dataKey="score" stroke="#2563eb" name="Test Score" />
        <Line type="monotone" dataKey="attendance" stroke="#16a34a" name="Attendance (%)" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
}

export default RiskChart;
