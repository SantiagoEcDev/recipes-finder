import "./LoginAd.css"
import Chef from "./chef.png"
import Arribiata from "./Arribiata.png";
import Boloñesa from "./Boloñesa.png";

export const LoginAd = () => {
  return (
    <div className="login-ad">
      <div className="login-ad-message">
        <h2 className="login-ad-message-title">Learn how to become a master chef right now!</h2>
        <a className="login-ad-button" href="#">Login</a>
      </div>
      <img className="login-ad-boloñesaImage" src={Boloñesa} alt="chef" />
      <img className="login-ad-arribiata" src={Arribiata} alt="chef" />
      <img className="login-ad-chefImage" src={Chef} alt="chef" />
    </div>
  );
};
