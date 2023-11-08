import { ClipLoader } from "react-spinners";

function Spinner({ colour }) {
  return <ClipLoader color={colour ? colour : "white"} size={20} />;
}

export default Spinner;
