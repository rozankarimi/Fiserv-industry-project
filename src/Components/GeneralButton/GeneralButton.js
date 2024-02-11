import "./GeneralButtonStyles.scss";

export default function GeneralButton({ text, buttonclass }) {
  return <button className={`${buttonclass}`}>{text}</button>;
}
