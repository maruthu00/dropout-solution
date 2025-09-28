import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const success = login(role, email, password);
    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Login
        </h2>

        {/* Role Selector */}
        <label className="block mb-4">
          <span className="text-gray-700">Select Role</span>
          <select
            className="w-full mt-2 p-2 border rounded"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Admin">Admin</option>
            <option value="Mentor">Mentor</option>
            <option value="Student">Student</option>
          </select>
        </label>

        {/* Email + Password Inputs (for all roles) */}
        <input
          type="email"
          placeholder={`${role} Email`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          placeholder={`${role} Password`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;


// return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//             <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//                 <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Login</h2>
//                 {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//                 <form onSubmit={handleLogin} className="space-y-6">
//                     <div>
//                         <label htmlFor="role" className="block text-sm font-medium text-gray-700">Select Role</label>
//                         <select id="role" value={role} onChange={(e) => setRole(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"><option>Student</option><option>Mentor</option><option>Admin</option></select>
//                     </div>
//                     {role === 'Student' && (
//                         <>
//                             <div>
//                                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                                 <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="alice@student.com" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
//                             </div>
//                             <div>
//                                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                                 <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
//                             </div>
//                         </>
//                     )}
//                     <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition">Login</button>
//                 </form>
//             </div>
//         </div>
//     );