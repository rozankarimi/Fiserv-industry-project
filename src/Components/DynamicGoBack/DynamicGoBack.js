import React from "react";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../../assets/images/backarrowlogo.png";
import "./DynamicGoBackStyles.scss";

const DynamicGoBack = ({ content }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="goBackContainer" onClick={goBack}>
      <img className="goBackContainer--logo" src={arrowIcon} />
      <span className="goBackContainer--previouspage">{content}</span>
    </div>
  );
};

export default DynamicGoBack;
