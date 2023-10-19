import metamaskSupportLogo from "../../assets/metamask-support.png";
import poweredByBlockaid from "../../assets/powered-by-blockaid.png";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar-container">
      <img src={metamaskSupportLogo} alt="support-logo" className="metamask-support-logo" />
      <img src={poweredByBlockaid} alt="powered-by-blockaid" className="powered-by-blockaid" />
    </div>
  );
}
