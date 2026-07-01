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
import TipCalculator from "./Routes/TipCalcuator";
import DoubleRangeSlider from "./Routes/DoubleRangeSlider";
import Timer from "./Routes/Timer";
import GradientColorGenerator from "./Routes/GradientColorGenerator";
import ImageZoom from "./Routes/ImageZoom";
import SlidingPuzzle from "./Routes/ImageSlidingPuzzle";
import ColorGuessGame from "./Routes/ColorGuessGame";
import SortableList from "./Routes/Sortablelist";
import DraggableImageSlider from "./Routes/DraggableImageSlider";

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
        <Route path="/image-accordion" element={<ImageAccordion />} />
        <Route path="/drag-and-drop" element={<DragAndDrop />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/tip-calculator" element={<TipCalculator />} />
        <Route path="/double-range-slider" element={<DoubleRangeSlider />} />
        <Route path="/timer" element={<Timer />} />
        <Route
          path="/gradient-color-generator"
          element={<GradientColorGenerator />}
        />
        <Route path="/image-zoom" element={<ImageZoom />} />
        <Route path="/image-sliding-puzzle" element={<SlidingPuzzle />} />
        <Route path="/color-guess-game" element={<ColorGuessGame />} />
        <Route path="/sortable-list" element={<SortableList />} />
        <Route
          path="/draggable-image-slider"
          element={<DraggableImageSlider />}
        />
      </Routes>
    </Router>
  );
}

export default App;
