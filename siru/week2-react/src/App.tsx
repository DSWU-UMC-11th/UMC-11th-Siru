import { use, createContext, useContext, useState } from "react";

type Theme = "light" | "dark";
type StudyMode = "focus" | "break";

const ThemeContext = createContext<Theme>("light");
const StudyModeContext = createContext<StudyMode>("focus");

function ThemeStatus() {
  const theme = useContext(ThemeContext);

  return <p>현재 테마: {theme}</p>;
}

function StudyModeStatus() {
  const studymode = use(StudyModeContext);

  return <p>현재 모드: {studymode}</p>;
}

export default function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mode, setMode] = useState<StudyMode>("focus");

  function handleToggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  function handleToggleMode() {
    setMode((nowMode) => {
      return nowMode === "focus" ? "break" : "focus";
    });
  }

  return (
    <>
      <ThemeContext value={theme}>
        <ThemeStatus />
        <button onClick={handleToggleTheme}>테마 바꾸기</button>
      </ThemeContext>

      <StudyModeContext value={mode}>
        <StudyModeStatus />
        <button onClick={handleToggleMode}>모드 바꾸기</button>
      </StudyModeContext>
    </>
  );
}
