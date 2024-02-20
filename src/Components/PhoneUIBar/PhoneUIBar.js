import "./PhoneUIBarStyles.scss";
import lightUIStatusBar from "../../assets/images/StatusBarLight.png";
import darkUIStatusBar from "../../assets/images/StatusBarDark.png";

export default function PhoneUIBar({ theme }) {
  let uiBarTheme = lightUIStatusBar;
  if (theme === "dark") {
    uiBarTheme = darkUIStatusBar;
  }
  return (
    <>
      <img className="uistatasbar" src={uiBarTheme} alt="ui status bar" />
    </>
  );
}
