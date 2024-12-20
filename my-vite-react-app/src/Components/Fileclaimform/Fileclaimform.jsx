import "./Fileclaimform.css"; // External CSS
import {
  FaDollarSign,
  FaMapMarkerAlt,
  FaLanguage,
  FaFileAlt, // Icon for Statement
  FaHandshake, // Icon for Agreement under Disputes
  FaFolderOpen,
  FaCloudUploadAlt, // Icon for Additional Documentation
} from "react-icons/fa"; // Importing icons

function Fileclaimform() {
  return (
    <div>
      <div className="div-1">
        <h2>
          File your Claim <span>(Approx 5 Minutes)</span>
        </h2>
      </div>
      {/* Claim Value Section */}
      <div className="div-2">
        <div className="row">
          {/* Claim Value Section */}
          <div className="column">
            <label htmlFor="claim-value">
              <FaDollarSign className="icon" /> Claim Value
            </label>
            <div className="input-group">
              {/* Contract Value Input */}
              <p>Contract-value</p>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="contract-value"
                  placeholder="10,00,00"
                  className="text-input"
                />
                <select className="currency-dropdown">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="INR">INR</option>
                  <option value="GBP">GBP</option>
                  <option value="JPY">JPY</option>
                  {/* Add more currencies as needed */}
                </select>
              </div>
              {/* Claim Value Input */}
              <p>Claim Value</p>

              <div className="input-wrapper">
                <input
                  type="text"
                  id="claim-value"
                  placeholder="Claim Value"
                  className="text-input"
                />
                <select className="currency-dropdown">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="INR">INR</option>
                  <option value="GBP">GBP</option>
                  <option value="JPY">JPY</option>
                  {/* Add more currencies as needed */}
                </select>
              </div>
              <p className="note">150% of Contract Value</p>
            </div>
          </div>

          {/* Place Section */}
          <div className="column">
            <label htmlFor="place">
              <FaMapMarkerAlt className="icon" /> Place
            </label>
            <select id="place" className="text-input">
              <option value="">Select the Place for proceedings</option>
              <option value="place1">New York</option>
              <option value="place2">London</option>
              <option value="place3">Delhi</option>
              {/* Add more places as needed */}
            </select>
            &nbsp;
            <p>
              Is the place for the proceedings the one mentioned in the
              agreement?
            </p>
            &nbsp;
            <div className="radio-group">
              <label>
                <input type="radio" name="place-confirmation" value="yes" /> Yes
              </label>
              <label>
                <input type="radio" name="place-confirmation" value="no" /> No
              </label>
            </div>
          </div>

          {/* Language Section */}
          <div className="column">
            <label htmlFor="language">
              <FaLanguage className="icon" /> Language
            </label>
            <select id="language" className="text-input">
              <option value="">Select the language for proceedings</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              {/* Add more languages as needed */}
            </select>
            &nbsp;
            <p>
              Is the language for the proceedings the one mentioned in the
              agreement?
            </p>
            &nbsp;
            <div className="radio-group">
              <label>
                <input type="radio" name="language-confirmation" value="yes" />{" "}
                Yes
              </label>
              <label>
                <input type="radio" name="language-confirmation" value="no" />{" "}
                No
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Statement and Additional Sections */}
      <div className="div-3">
        <div className="row">
          {/* Statement Section */}
          <div className="column">
            <label>
              <FaFileAlt className="icon" /> Statement
            </label>
            <div className="upload-box" id="firstname">
              <input type="text" placeholder="Write your Statement Here" />
              {/* <p>Write your Statement Here</p> */}
              <p>or</p>
              <div className="upload-icon-container">
                <FaCloudUploadAlt className="upload-icon" />
              </div>
              <p>Upload a PDF</p>
            </div>
          </div>

          {/* Agreement under Disputes Section */}
          <div className="column">
            <label>
              <FaHandshake className="icon" /> Agreement under Disputes
            </label>
            <div className="upload-section">
              <div className="upload-box">
                <div className="upload-icon-container">
                  <FaCloudUploadAlt className="upload-icon" />
                </div>
                <p>Upload the Contract</p>
                <p>Max 2MB, PDF</p>
              </div>
              <div className="upload-box">
                <div className="upload-icon-container">
                  <FaCloudUploadAlt className="upload-icon" />
                </div>
                <p>Arbitration Agreement</p>
                <p>Max 2MB, PDF</p>
              </div>
            </div>
          </div>

          {/* Additional Documentation Section */}
          <div className="column">
            <label>
              <FaFolderOpen className="icon" /> Additional Documentation
            </label>
            <div className="upload-section">
              <div className="upload-box">
                <div className="upload-icon-container">
                  <FaCloudUploadAlt className="upload-icon" />
                </div>
                <p>Upload the Document</p>
                <p>Max 2MB, PDF</p>
              </div>
              <div className="upload-box">
                <div className="upload-icon-container">
                  <FaCloudUploadAlt className="upload-icon" />
                </div>
                <p>Add More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fileclaimform;
