import "./GeneralButtonStyles.scss";

export default function GeneralButton({ text, buttonclass, handler }) {
  return <button className={`${buttonclass}`}>{text}</button>;
}
