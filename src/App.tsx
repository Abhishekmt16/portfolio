import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import AdmissionEnquiry from "./pages/AdmissionEnquiry";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/admission-enquiry" element={<AdmissionEnquiry />} />
    </Routes>
  );
}

export default App;