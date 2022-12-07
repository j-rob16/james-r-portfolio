import { createContext, useState } from 'react';

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  const [theme, setTheme] = useState('light');
  const toggleDarkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const color = theme === "light" ? "#333" : "#FFF";
  const backgroundColor = theme === "light" ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <div>
      <DarkModeContext.Provider
        value={{ theme, toggleDarkMode }}
      >
        {props.children}
      </DarkModeContext.Provider>
    </div>
  )
};

export { DarkModeContext, DarkModeProvider };