import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import ImageColorPicker from "./Routes/ImageColorPicker";
import DigitalClock from "./Routes/DigitalClock";
import StopWatch from "./Routes/StopWatch";
import RGBColorSlider from "./Routes/RGBColorSlider";
import AgeCalculator from "./Routes/AgeCalculator";
import OTPGenerator from "./Routes/OTPGenerator";
import FlashlightEffect from "./Routes/FlashlightEffect";
import ImageAccordion from "./Routes/ImageAccordion";
import DragAndDrop from "./Routes/DragAndDrop";
import PasswordGenerator from "./Routes/PasswordGenerator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-color-picker" element={<ImageColorPicker />} />
        <Route path="/digitalclock" element={<DigitalClock />} />
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/RGB-color-slider" element={<RGBColorSlider />} />
        <Route path="/age-calculator" element={<AgeCalculator />} />
        <Route path="/otp-generator" element={<OTPGenerator />} />
        <Route path="/flashlight-effect" element={<FlashlightEffect />} />
        <Route path="/image-accordion" element={<ImageAccordion />} />"
        <Route path="/drag-and-drop" element={<DragAndDrop />} />"
        <Route path="/password-generator" element={<PasswordGenerator />} />"
      </Routes>
    </Router>
  );
}

export default App;
