import { createContext, useState, useContext } from "react";
import { studentsData, adminsData, mentorsData } from "../mockData"; // 👈 add separate mock data

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (role, email, password) => {
    if (role === "Student") {
      const student = studentsData.find(
        (s) => s.email === email && s.password === password
      );
      if (student) {
        setUser({ role, ...student }); // save full student details
        return true;
      }
      return false;
    }

    if (role === "Admin") {
      const admin = adminsData.find(
        (a) => a.email === email && a.password === password
      );
      if (admin) {
        setUser({ role, ...admin });
        return true;
      }
      return false;
    }

    if (role === "Mentor") {
      const mentor = mentorsData.find(
        (m) => m.email === email && m.password === password
      );
      if (mentor) {
        setUser({ role, ...mentor });
        return true;
      }
      return false;
    }

    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
