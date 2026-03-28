import Header from "./components/Header";
import NotePage from "./pages/NotePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Header />
        <Routes>
          <Route path="/notes" element={<NotePage />} />
          <Route path="/me" element={null} />
          <Route path="/login" element={null} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
