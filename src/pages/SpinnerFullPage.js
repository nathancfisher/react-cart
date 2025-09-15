import "./SpinnerFullPage.css";

import { ClimbingBoxLoader } from "react-spinners";

function SpinnerFullPage() {
  return (
    <div className="spinner">
      <ClimbingBoxLoader color={`var(--color-light)`} />
    </div>
  );
}

export default SpinnerFullPage;
