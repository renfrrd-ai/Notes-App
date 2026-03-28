import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/notes" element={<Home />} />
        <Route path="/me" element={null} />
        <Route path="/login" element={null} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
