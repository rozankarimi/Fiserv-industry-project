import "./LandingPage.scss";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <section className="scan-button-container">
      <Link to="/orderSummary">
        <button className="scan-button-container__button">Scan</button>
      </Link>
    </section>
  );
};

export default LandingPage;
