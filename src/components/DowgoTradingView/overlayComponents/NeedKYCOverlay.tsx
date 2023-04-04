import { smallIconStyle } from "../../../styles/iconStyle";

import { ReactComponent as CheckIcon } from "../../../assets/icons/check-icon.svg";
export const NeedKYCOverlay = () => {
  return (
    <div className="trading-container-overlay">
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <CheckIcon style={smallIconStyle} />
        </div>

        <div className="overlay-warning">KYC Needed</div>
        <div className="overlay-text">
          In order to access fully at our product you must do KYC process.
        </div>
        <div
          className="overlay-action-text"
          onClick={() => {
            //Link
          }}
        >
          Complete KYC
        </div>
      </div>
    </div>
  );
};
