import { useEffect, useState } from "react";

const DARK_MODE = "dark-mode";

const getDarkMode = () => true;

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(getDarkMode);

  useEffect(() => {
    const initialValue = getDarkMode();
    if (initialValue !== darkMode) {
      localStorage.setItem(DARK_MODE, darkMode);
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};