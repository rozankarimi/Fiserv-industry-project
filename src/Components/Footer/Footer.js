import "./FooterStyles.scss";
import cloverNameLogo from "../../assets/images/clovernamelogo.png";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__innnerwrapper">
        <div className="footer__innnerwrapper__message">Secure Checkout by</div>
        <img
          className="footer__innnerwrapper__image"
          src={cloverNameLogo}
          alt="Clover Logo"
        />
      </div>
    </section>
  );
}
