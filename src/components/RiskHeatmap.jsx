import { useEffect, useState } from "react";
import { studentsData } from "../mockData";

function RiskHeatmap() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Simulating API call
    const riskCalculated = studentsData.map((s) => {
      const avgScore = s.scores.reduce((a, b) => a + b, 0) / s.scores.length;
      const avgAttendance = s.attendance.reduce((a, b) => a + b, 0) / s.attendance.length;

      let risk = "Low";
      if (avgScore < 60 || avgAttendance < 70) risk = "Medium";
      if (avgScore < 45 || avgAttendance < 50 || !s.feesPaid) risk = "High";

      return { ...s, risk };
    });

    setStudents(riskCalculated);
  }, []);

  const getColor = (risk) => {
    if (risk === "Low") return "bg-green-500";
    if (risk === "Medium") return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">Risk Heatmap</h3>
      <ul>
        {students.map((s) => (
          <li
            key={s.id}
            className="flex justify-between p-2 mb-2 rounded text-black font-medium shadow-sm"
          >
            <span>{s.name}</span>
            <span className={`px-3 py-1 rounded ${getColor(s.risk)}`}>{s.risk}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RiskHeatmap;
