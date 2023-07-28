import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

//icons
import { FaMoon } from "react-icons/fa";
import { BsLightbulb } from "react-icons/bs";

export default function DarkModeButton() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="">
      <div>
          {/* {currentTheme === "dark" ? "Dark" : "Light"}{" "} */}
    
        <div >
          {currentTheme === "dark" ? (
            <button
              className="bg-white/70 hover:bg-white rounded-[50%] p-[12px] shadow-2xl text-2xl"
              onClick={toggleTheme}
            >
              <BsLightbulb className="text-black" />
            </button>
          ) : (
            <button
              className="bg-black/70 hover:bg-black rounded-[40%]  border-2 p-[12px] shadow-2xl"
              onClick={toggleTheme}
            >
              <FaMoon className="text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
