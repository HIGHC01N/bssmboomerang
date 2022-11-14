import { Link } from "react-router-dom";
import "./Info.css";

export function Info() {
  return (
    <div className="InfoMain">
      <header className="InfoHeader">
        <div className="InfoNav">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="LogoTittle">
              <img className="InfoLogo" src="/img/boomerang.png"></img>
              <span className="InfoText">부메랑</span>
            </div>
          </Link>
          <Link to="/Service" style={{ textDecoration: "none" }}>
            <span className="NavText">서비스소개</span>
          </Link>
          <Link to="/mac/5c:cf:7f:d1:a1:47:" style={{ textDecoration: "none" }}>
            <span className="NavText">물건인식</span>
          </Link>
          <Link to="/Ref" style={{ textDecoration: "none" }}>
            <span className="NavText">현재탄소량</span>
          </Link>
          <Link to="/Guide" style={{ textDecoration: "none" }}>
            <span className="NavText">가이드</span>
          </Link>
          <Link to="/News" style={{ textDecoration: "none" }}>
            <span className="NavText">환경뉴스</span>
          </Link>
        </div>
      </header>
      <div className="InfoBody">
        <div className="InfoBackDiv">
          <img className="InfoBackImg" src="/img/Background.png"></img>
        </div>
        <div className="InfoBetween">
          <div className="InfoLeft">
            <span className="당신이먹는음식에는">
              당신이 사용하는 모든 것은
            </span>
            <span className="환경을오염시키는">환경을 오염시키는</span>
            <span className="탄소">탄소</span>
            <span className="가있습니다">가 있습니다.</span>
            <div className="탄소소개밑">
              <Link to ="/News" style={{ textDecoration: "none" }}>
              <div className="탄소소개밑왼쪽">
                <span className="환경뉴스보기">
                  환경뉴스
                  <br /> 보기
                </span>
                <div className="환경뉴스보기화살표">
                  <img className="인포화살표" src="/img/InfoBack.png"></img>
                </div>
              </div>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="탄소소개밑오른쪽">
                  <span className="홈으로">홈 으로</span>
                  <div className="홈으로화살표">
                    <img className="인포화살표" src="/img/InfoBack.png"></img>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="InfoRight">
            <span className="소개">
              Introduce
              <br />
            </span>
            <div className="소개박스">
              <div className="인포탄소컬러">탄소컬러</div>
              <div className="신호등">
                <div className="신호등빨간색"></div>
                <div className="신호등초록색"></div>
                <div className="신호등노란색"></div>
              </div>
              <div className="신호등소개">
                <span className="신호등소개글">심각</span>
                <span className="신호등소개글">양호</span>
                <span className="신호등소개글">경고</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
