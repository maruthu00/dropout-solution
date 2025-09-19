import { useState } from "react";

function CounselingScheduler({ role, student }) {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [booked, setBooked] = useState(false);

  const slots = ["Mon 10:00 AM", "Tue 11:00 AM", "Wed 3:00 PM", "Thu 1:00 PM"];

  if (role === "Student" && student.risk !== "High") {
    return (
      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h3 className="text-lg font-bold mb-4">Counseling Scheduler</h3>
        <p className="text-gray-500">You are not flagged as High Risk. 🎉</p>
      </div>
    );
  }

  const handleBooking = (slot) => {
    setSelectedSlot(slot);
    setBooked(true);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <h3 className="text-lg font-bold mb-4">Counseling Scheduler</h3>

      {role === "Student" && student.risk === "High" && !booked && (
        <>
          <p className="mb-3 text-gray-600">
            Choose a slot to book a counseling session:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {slots.map((slot, i) => (
              <button
                key={i}
                onClick={() => handleBooking(slot)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {slot}
              </button>
            ))}
          </div>
        </>
      )}

      {role === "Student" && booked && (
        <p className="text-green-600 font-semibold">
          ✅ Session booked for <span className="font-bold">{selectedSlot}</span>
        </p>
      )}

      {role === "Mentor" && (
        <p className="text-gray-600">
          {booked
            ? `📌 A student booked a session at ${selectedSlot}`
            : "No bookings yet"}
        </p>
      )}
    </div>
  );
}

export default CounselingScheduler;
