import { createContext, useState, useContext } from "react";
import { studentsData } from "../mockData";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (role, email, password) => {
    if (role === "Student") {
      const student = studentsData.find(
        (s) => s.email === email && s.password === password
      );
      if (student) {
        setUser({ role, student }); // ✅ Save full student object
        return true;
      }
      return false;
    }

    // For Admin & Mentor (dummy login)
    setUser({ role });
    return true;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
