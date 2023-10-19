import { useSearchParams } from "react-router-dom";
import "./ConfirmationPage.css";

const BLOCKAID_TICKETING_PORTAL = "https://mm-false-positive-portal.pages.dev/form/";

function ConfirmationPage() {
  const [searchParams] = useSearchParams();

  return (
    <div className="confirmation-container">
      <h1>Found a wrong classification?</h1>
      <p className="content">
        Welcome to Metamask x Blockaid support portal.
        <br />
        If you found a miss-classified transaction, please click{" "}
        <span className="instruction">Continue</span> and fill the form.
        <br />
        If you got here by accident, please click{" "}
        <span className="instruction">Cancel</span> to go back to the previous
        page.
      </p>

      <div className="actions">
        <button
          className="continue"
          onClick={() => {
              const externalURL = BLOCKAID_TICKETING_PORTAL + "?" + searchParams.toString();
              window.location.href = externalURL;
            }
          }
        >
          Continue
        </button>
        <button onClick={() => close()}>Cancel</button>
      </div>
    </div>
  );
}

export default ConfirmationPage;
