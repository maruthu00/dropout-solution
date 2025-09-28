import RiskChart from "../components/RiskChart";
import RiskHeatmap from "../components/RiskHeatmap";
import Notifications from "../components/Notifications";
import CounselingScheduler from "../components/CounselingScheduler";
import ReportsGenerator from "../components/ReportsGenerator";
import AdminSummaryChart from "../components/AdminSummaryChart";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
        Dashboard – {user?.role}
      </h2>

      {/* Admin */}
      {user?.role === "Admin" && (
        <>
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h3 className="text-xl font-bold mb-2">Admin Panel</h3>
            <p>Institution-wide reports & analytics.</p>
          </div>
          <AdminSummaryChart />
          <ReportsGenerator />
        </>
      )}

      {/* Mentor */}
      {user?.role === "Mentor" && (
        <>
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h3 className="text-xl font-bold mb-2">Mentor Panel</h3>
            <p>Track students’ risks and counseling sessions.</p>
          </div>
          <RiskHeatmap />
        </>
      )}

      {/* Student */}
      {user?.role === "Student" && (
        <>
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h3 className="text-xl font-bold mb-2">My Profile</h3>
            <p>
              <b>Name:</b> {user.name}
            </p>
            <p>
              <b>Email:</b> {user.email}
            </p>
            <p>
              <b>Fees Status:</b> {user.feesPaid ? "✅ Paid" : "❌ Pending"}
            </p>
          </div>
          <RiskChart student={user} />
          <CounselingScheduler role="Student" student={user} />
        </>
      )}

      {/* Common */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <Notifications role={user?.role} />
      </div>
    </div>
  );
}

export default Dashboard;
Dashboard.jsx;

12;
