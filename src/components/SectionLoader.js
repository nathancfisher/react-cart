import "./SectionLoader.css";
import { GridLoader } from "react-spinners";

function SectionLoader() {
  return (
    <div className="section-loader">
      <GridLoader color="var(--primary-color)" />
    </div>
  );
}

export default SectionLoader;
