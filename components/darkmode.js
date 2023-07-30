// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";

// //icons
// import { FaMoon } from "react-icons/fa";
// import { BsLightbulb } from "react-icons/bs";

// export default function DarkModeButton() {
//   const { systemTheme, theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;
//   const currentTheme = theme === "system" ? systemTheme : theme;

//   const toggleTheme = () => {
//     if (currentTheme === "dark") {
//       setTheme("light");
//       document.documentElement.classList.remove("dark");
//     } else {
//       setTheme("dark");
//       document.documentElement.classList.add("dark");
//     }
//   };



//   return (
//     <div className="">
//       <div>
//           {/* {currentTheme === "dark" ? "Dark" : "Light"}{" "} */}
    
//         <div >
//           {currentTheme === "dark" ? (
//             <button
//               className="bg-white/70 hover:bg-white rounded-[50%] p-[12px] shadow-2xl "
//               onClick={toggleTheme}
//             >
//               <BsLightbulb className="text-black" />
//             </button>
//           ) : (
//             <button
//               className="bg-black/70 hover:bg-black rounded-[40%]  border-2 p-[12px] shadow-2xl"
//               onClick={toggleTheme}
//             >
//               <FaMoon className="text-white" />
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



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
    // Check if there is a saved preference for the user's theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else {
      // If there is no saved preference, set the default theme to dark
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="">
      <div>
          {/* {currentTheme === "dark" ? "Dark" : "Light"}{" "} */}
    
        <div >
          {currentTheme === "dark" ? (
            <button
              className="bg-white/70 hover:bg-white rounded-[50%] p-[12px] shadow-2xl "
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