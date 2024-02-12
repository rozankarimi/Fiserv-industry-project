import "./GeneralNavigationButtonStyles.scss";
import { useNavigate } from "react-router-dom";

export default function GeneralButton({ text, buttonclass, theroute }) {
  const navigate = useNavigate();
  return (
    <button className={`${buttonclass}`} onClick={() => navigate(theroute)}>
      {text}
    </button>
  );
}
