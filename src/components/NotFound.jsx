import "./NotFound.css";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="Body404">
      <span className="Text404">404</span>
      <span className="NotFound">NotFound</span>
      <span className="Info404">페이지를 찾을 수 없습니다.</span>
      <Link to="/"  style={{ textDecoration: "none" }}>
        <div className="Home404">메인으로 돌아가기</div>
      </Link>
    </div>
  );
}
