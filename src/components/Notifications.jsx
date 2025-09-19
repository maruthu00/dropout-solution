import { useEffect, useState } from "react";
import { studentsData } from "../mockData";

function Notifications({ role }) {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Simulate API fetching notifications
    const generatedAlerts = [];

    studentsData.forEach((s) => {
      const avgScore = s.scores.reduce((a, b) => a + b, 0) / s.scores.length;
      const avgAttendance = s.attendance.reduce((a, b) => a + b, 0) / s.attendance.length;

      if (avgScore < 45) {
        generatedAlerts.push({
          type: "Academic Risk",
          message: `${s.name} has critically low scores.`,
        });
      }

      if (avgAttendance < 60) {
        generatedAlerts.push({
          type: "Attendance Warning",
          message: `${s.name} has very low attendance.`,
        });
      }

      if (!s.feesPaid) {
        generatedAlerts.push({
          type: "Fee Alert",
          message: `${s.name} has pending fee payment.`,
        });
      }
    });

    setAlerts(generatedAlerts);
  }, []);

  // Filter based on role
  let filteredAlerts = alerts;
  if (role === "Student") {
    filteredAlerts = alerts.filter((a) => a.message.includes("Alice")); // Example: Alice sees only her alerts
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-4">Notifications</h3>
      {filteredAlerts.length === 0 ? (
        <p className="text-gray-500">No alerts 🎉</p>
      ) : (
        <ul className="space-y-2">
          {filteredAlerts.map((a, i) => (
            <li
              key={i}
              className="p-3 rounded border-l-4 bg-gray-50 shadow-sm"
              style={{
                borderColor:
                  a.type === "Academic Risk"
                    ? "#dc2626"
                    : a.type === "Attendance Warning"
                    ? "#f59e0b"
                    : "#2563eb",
              }}
            >
              <span className="font-semibold">{a.type}:</span> {a.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notifications;
