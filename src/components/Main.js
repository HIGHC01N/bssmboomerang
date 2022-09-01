import { Link } from "react-router-dom"
import './Main.css';

export const Main = () => {
    return (
        <div>
            <h1 className="boom">부메랑</h1>
            <h2 className="use">키오스크 이용하기</h2>
            <Link to="/5c:cf:7f:d1:a1:47:" >
                <div className = "box1">
                    <img src="/img/Group.png" className="cam"></img>
                    <p>음식 인식</p>
                    </div>
            </Link>
            
            <Link to="/Ref" >
                <div className = "box2">
                    <img src="/img/Vector.png" className="ref"></img>
                    <p>냉장고 현황</p>
                    </div>
            </Link>
            <footer>
                <h2 className="footer"> 이용할 서비스를 선택해 주십시요</h2>
            </footer>
        </div>
    )
}