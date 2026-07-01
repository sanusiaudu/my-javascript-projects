import { useState } from "react";

export default function InternetSpeedTest() {
  const [loading, setLoading] = useState(false);
  const [speed, setSpeed] = useState({
    bits: "",
    kbps: "",
    mbps: "",
  });

  const testLink = "https://picsum.photos/1200/800";

  const checkSpeed = async () => {
    setLoading(true);
    setSpeed({ bits: "", kbps: "", mbps: "" });

    try {
      const startTime = Date.now();
      const url = `${testLink}?t=${startTime}`;

      const response = await fetch(url, { cache: "no-cache" });
      const buffer = await response.arrayBuffer();
      const endTime = Date.now();

      const bytes = buffer.byteLength;
      const seconds = Math.max((endTime - startTime) / 1000, 0.001);
      const bitsPerSecond = (bytes * 8) / seconds;
      const kbps = (bitsPerSecond / 1000).toFixed(2);
      const mbps = (bitsPerSecond / 1000000).toFixed(2);

      setSpeed({
        bits: bitsPerSecond.toFixed(0),
        kbps,
        mbps,
      });
    } catch (error) {
      console.error(error);
      setSpeed({ bits: "N/A", kbps: "N/A", mbps: "N/A" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="w-[350px] rounded-lg bg-white p-8 shadow-xl">
        <h1 className="mb-8 text-center text-2xl font-bold">
          Internet Speed Test
        </h1>

        <div className="space-y-3">
          <p>
            <span className="font-semibold">Speed In Bits:</span> {speed.bits}
          </p>

          <p>
            <span className="font-semibold">Speed In Kbps:</span> {speed.kbps}
          </p>

          <p>
            <span className="font-semibold">Speed In Mbps:</span> {speed.mbps}
          </p>
        </div>

        <button
          onClick={checkSpeed}
          disabled={loading}
          className="mt-8 w-full rounded bg-blue-600 py-3 text-white transition hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Testing..." : "Test Internet Speed"}
        </button>
      </div>
    </div>
  );
}
