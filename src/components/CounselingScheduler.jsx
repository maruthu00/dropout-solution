import React, { useState } from "react";

function CounselingScheduler({ role, student }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  if (role !== "Student" || !student) {
    return null; // Only for students
  }

  // --- Calculate averages ---
  const avgAttendance =
    student.attendance.reduce((a, b) => a + b, 0) / student.attendance.length;
  const avgScore =
    student.scores.reduce((a, b) => a + b, 0) / student.scores.length;

  // --- Risk detection ---
  const isHighRisk = avgAttendance < 60 || avgScore < 60 || !student.feesPaid;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Counseling scheduled on ${date} at ${time} for ${student.name}`
    );
    setIsModalOpen(false);
    setDate("");
    setTime("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <h3 className="text-xl font-bold mb-2">Counseling Scheduler</h3>

      {isHighRisk ? (
        <div className="text-red-600 font-semibold">
          ⚠️ You are flagged as <b>High Risk</b>.
          <p className="mt-2">
            Please schedule a counseling session with your mentor immediately.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Book Counseling
          </button>
        </div>
      ) : (
        <p className="text-green-600">
          🎉 You are not flagged as High Risk. Keep up the good work!
        </p>
      )}

      {/* --- Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4 text-blue-600">
              Book Counseling Session
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Select Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Select Time</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CounselingScheduler;
