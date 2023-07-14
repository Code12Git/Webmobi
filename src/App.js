import Home from "./Pages/Home";
import WeatherDetails from "./Pages/WeatherDetails";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/weather/:city" element={<WeatherDetails />} />
      </Routes>
    </div>
  );
}

export default App;
