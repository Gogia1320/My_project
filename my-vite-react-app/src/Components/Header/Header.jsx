import "./Header.css"; // Add your CSS styles here
import { FaBell, FaUserCircle } from "react-icons/fa"; // Icons from react-icons library

const Header = () => {
  return (
    <header className="header-container">
      <nav className="progress-steps">
        <div className="step completed">
          <span>01</span>
          <p>Preliminary</p>
        </div>
        <div className="line completed-line"></div>
        <div className="step completed">
          <span>02</span>
          <p>Your Details</p>
        </div>
        <div className="line completed-line"></div>
        <div className="step completed">
          <span>03</span>
          <p>KYC</p>
        </div>
        <div className="line active-line"></div>
        <div className="step active">
          <span>04</span>
          <p>Parties</p>
        </div>
        <div className="line incomplete-line"></div>
        <div className="step">
          <span>05</span>
          <p>Claim</p>
        </div>
        <div className="line incomplete-line"></div>
        <div className="step">
          <span>06</span>
          <p>Review</p>
        </div>
        <div className="line incomplete-line"></div>
        <div className="step">
          <span>07</span>
          <p>Payment</p>
        </div>
      </nav>
      <div className="header-icons">
        <button className="icon-button">
          <FaBell className="icon" />
        </button>
        <button className="icon-button">
          <FaUserCircle className="icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
