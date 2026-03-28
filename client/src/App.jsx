import Header from "./components/Header";
import NotePage from "./pages/NotePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        await axios.get("/api/me", { withCredentials: true });
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
      }
    }

    checkAuth();
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/notes" element={<NotePage />} />
          <Route path="/me" element={null} />
          <Route
            path="/login"
            element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
