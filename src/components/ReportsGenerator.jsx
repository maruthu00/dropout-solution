import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { studentsData } from "../mockData";

function ReportsGenerator() {
  // Prepare CSV data
  const csvHeaders = [
    { label: "Name", key: "name" },
    { label: "Average Attendance (%)", key: "attendance" },
    { label: "Average Score", key: "score" },
    { label: "Fees Paid", key: "fees" },
    { label: "Risk Level", key: "risk" },
  ];

  const calculateRisk = (student) => {
    const avgScore = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
    const avgAttendance = student.attendance.reduce((a, b) => a + b, 0) / student.attendance.length;

    let risk = "Low";
    if (avgScore < 60 || avgAttendance < 70) risk = "Medium";
    if (avgScore < 45 || avgAttendance < 50 || !student.feesPaid) risk = "High";
    return { avgScore, avgAttendance, risk };
  };

  const csvData = studentsData.map((s) => {
    const { avgScore, avgAttendance, risk } = calculateRisk(s);
    return {
      name: s.name,
      attendance: avgAttendance.toFixed(1),
      score: avgScore.toFixed(1),
      fees: s.feesPaid ? "Paid" : "Pending",
      risk,
    };
  });

  // PDF Export
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("EduGuard - Student Risk Report", 14, 15);

    const tableData = csvData.map((row) => [
      row.name,
      row.attendance,
      row.score,
      row.fees,
      row.risk,
    ]);

    doc.autoTable({
      head: [["Name", "Attendance (%)", "Avg Score", "Fees", "Risk"]],
      body: tableData,
      startY: 20,
    });

    doc.save("EduGuard_Student_Report.pdf");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <h3 className="text-lg font-bold mb-4">Reports Generator</h3>
      <p className="text-gray-600 mb-4">
        Export student performance, fees, and risk levels.
      </p>
      <div className="flex gap-4">
        <CSVLink
          data={csvData}
          headers={csvHeaders}
          filename="EduGuard_Student_Report.csv"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Export CSV
        </CSVLink>
        <button
          onClick={downloadPDF}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Export PDF
        </button>
      </div>
    </div>
  );
}

export default ReportsGenerator;
