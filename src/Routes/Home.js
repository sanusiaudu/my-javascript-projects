import { Link } from "react-router-dom";

function Home() {
  const routes = [
    { path: "/image-color-picker", label: "Image Color Picker" },
    { path: "/digitalclock", label: "Digital Clock" },
    { path: "/stopwatch", label: "Stopwatch" },
    { path: "/RGB-color-slider", label: "RGB Color Slider" },
    { path: "/age-calculator", label: "Age Calculator" },
    { path: "/otp-generator", label: "OTP Generator" },
    { path: "/flashlight-effect", label: "Flashlight Effect" },
    { path: "/image-accordion", label: "Image Accordion" },
    { path: "/drag-and-drop", label: "Drag and Drop" },
    { path: "/password-generator", label: "Password Generator" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <div className="bg-white my-3 bg-opacity-90 rounded-3xl shadow-lg p-10 w-full max-w-xl">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
          Welcome to the Home Page!
        </h1>
        <ul className="space-y-4">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className="block w-full text-lg text-center py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow hover:from-pink-500 hover:to-yellow-500 transition-all duration-200"
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Home;
