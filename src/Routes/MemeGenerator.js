import { useEffect, useState } from "react";

const subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

export default function MemeGenerator() {
  const [meme, setMeme] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const getMeme = async () => {
    setLoading(true);

    try {
      const randomSubreddit =
        subreddits[Math.floor(Math.random() * subreddits.length)];

      const response = await fetch(
        `https://meme-api.com/gimme/${randomSubreddit}`,
      );

      const data = await response.json();

      // Wait for image to load before displaying it
      const img = new Image();

      img.onload = () => {
        setMeme(data.url);
        setTitle(data.title);
        setLoading(false);
      };

      img.src = data.url;
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMeme();
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-repeat p-5"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cubes.png')",
      }}
    >
      <div className="w-full max-w-xl rounded-lg bg-white p-8 shadow-xl">
        {loading ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-96 rounded-3xl bg-slate-200"></div>
            <div className="mx-auto h-6 w-3/4 rounded-full bg-slate-200"></div>
          </div>
        ) : (
          <>
            <img
              src={meme}
              alt={title}
              className="mx-auto mb-4 max-h-96 w-auto rounded object-contain"
            />

            <h3 className="mb-8 text-center text-gray-600">{title}</h3>
          </>
        )}

        <button
          onClick={getMeme}
          disabled={loading}
          className="mx-auto block rounded-full bg-violet-600 px-8 py-3 text-lg font-medium text-white transition hover:bg-violet-700 disabled:opacity-50"
        >
          {loading ? "Loading..." : "Get Meme"}
        </button>
      </div>
    </div>
  );
}
