import "./App.css";
import Homepage from "./homepage/homepage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App bg-[#F5F5F5] ">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
