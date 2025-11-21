import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useEffect, useState } from "react";

const Landing = () => {
  const navigate = useNavigate();
  const [totalGamesPlayed, setTotalGamesPlayed] = useState(0);
  const [totalPlaying, setTotalPlaying] = useState(0);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await fetch("http://localhost:8080/analytics");
        const data = await res.json();
        console.log("Analytics data:", data);
        setTotalGamesPlayed(data.totalGames);
        setTotalPlaying(data.totalPlaying);
      } catch (error) {
        return;
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="bg-[#302E2B] min-h-screen text-white flex flex-col items-center pt-5">
      <header className="flex items-center justify-center gap-6 text-sm md:text-base px-4 text-center">
        <p className="font-light">
          <span className="font-extrabold">{totalPlaying}</span> PLAYING NOW
        </p>
        <p className="font-light">
          <span className="font-extrabold">{totalGamesPlayed}</span> GAMES TODAY
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl w-full px-4 mt-24 md:mt-32">
        <div className="flex justify-center">
          <img
            src="/chessBg.png"
            alt="chess-bg"
            className="w-full max-w-lg md:max-w-2xl"
          />
        </div>
        <div className="flex flex-col space-y-10 w-full max-w-sm text-center mx-auto">
          <h1 className="text-4xl font-extrabold">
            Play chess.
            <br />
            Improve your game. Have fun!
          </h1>
          <Button onClick={() => navigate("/play")}>Get Started</Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
