import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import ChatWidget from "./components/ChatWidget";
import HeroSection from "./components/HeroSection";


type Theme = "dark" | "light";

export default function App() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    // normalize to a valid Theme
    const initialTheme: Theme =
      saved === "light" ? "light" : "dark";

    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#0B0B0B] dark:text-white transition-colors">
      {/* Theme Toggle */}
      <button
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-105 transition"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <HeroSection />
      <ChatWidget />

    </div>
  );
}
