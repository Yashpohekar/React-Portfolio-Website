import "../App.css";
import { Sun } from "react-bootstrap-icons";
import { Moon } from "react-bootstrap-icons";
import { useContext } from "react";
import { themeContext } from "../ThemeProvider";

const Toggle = () => {
  const theme = useContext(themeContext);
  console.log(theme)
  const darkMode = theme.state.darkMode
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  console.log(theme)

  };
  return (
    <div className="toggle" onClick={handleClick}>
      <Sun />
      <Moon />

      <div
        className="t-button"
        style={darkMode? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
