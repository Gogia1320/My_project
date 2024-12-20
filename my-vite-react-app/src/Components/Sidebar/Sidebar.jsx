import {
  FaHome,
  FaFileAlt,
  FaCalendar,
  FaUser,
  FaFolderOpen,
} from "react-icons/fa"; // Import icons
import { MdDashboard } from "react-icons/md"; // Example from Material Icons
import "./Sidebar.css"; // Import the CSS file
import justiceImage from "../Sidebar/image1.png";
import jurImage from "../Sidebar/image.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={jurImage} alt="Jur" className="jur-image" />
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={menuItemStyle}>
          <MdDashboard style={iconStyle} /> Dashboard
        </li>
        <li style={menuItemStyle}>
          <FaFileAlt style={iconStyle} /> My Cases
        </li>
        <li style={menuItemStyle}>
          <FaUser style={iconStyle} /> Activities
        </li>
        <li style={menuItemStyle}>
          <FaCalendar style={iconStyle} /> Calendar
        </li>
        <li style={menuItemStyle}>
          <FaFolderOpen style={iconStyle} /> Files
        </li>
        <li style={menuItemStyle}>
          <FaHome style={iconStyle} /> Open a Dispute
        </li>
      </ul>

      <div className="justice-box">
        <p>Get Justice on every Claims</p>
        <img src={justiceImage} alt="Justice" className="justice-image" />
      </div>
    </div>
  );
};

// Inline styles for icons and menu items
const menuItemStyle = {
  display: "flex",
  alignItems: "center",
  padding: "10px",
  fontSize: "25px",
  cursor: "pointer",
};

const iconStyle = {
  marginRight: "10px",
  color: "#333",
  fontSize: "18px",
};

export default Sidebar;
