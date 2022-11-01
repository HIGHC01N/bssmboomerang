import { Link } from "react-router-dom";
import "./Info.css";

export function Info() {
  return (
    <div className="InfoBody">
      <Link to="/">
        <div className="InfoBackDiv">
          <img className="InfoBackImg" src="/img/Vector5.png"></img>
        </div>
      </Link>
      <div>
        앙기모디
      </div>
    </div>
  );
}
