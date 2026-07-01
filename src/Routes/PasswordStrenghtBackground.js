import { useState } from "react";

export default function PasswordStrengthBackground() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Blur decreases as password length increases
  const blur = Math.max(0, 16 - password.length);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center transition-all duration-300"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=1600')",
          filter: `blur(${blur}px)`,
        }}
      />

      {/* Card */}
      <div className="absolute left-1/2 top-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-10 shadow-xl">
        <h1 className="mb-8 text-center text-3xl font-bold">
          Image Password Strength
        </h1>

        <div className="space-y-2">
          <label className="block font-medium">Password</label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-400 p-3 pr-11 outline-none focus:border-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-gray-800"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path
                    fill="currentColor"
                    d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M3 3l18 18" />
                  <path d="M10.58 10.58A2 2 0 0012 14a2 2 0 001.42-.58" />
                  <path d="M9.88 5.09A9.77 9.77 0 0112 4.5c4.4 0 8.3 2.7 10 6.5a10.94 10.94 0 01-2.16 3.19" />
                  <path d="M6.23 6.23A10.9 10.9 0 002 11c1.7 3.8 5.6 6.5 10 6.5a9.76 9.76 0 004.77-1.23" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-gray-500">Blur: {blur}px</p>
      </div>
    </div>
  );
}
