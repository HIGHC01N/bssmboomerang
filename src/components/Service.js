import "./Service.css";
import { Link } from "react-router-dom";

export function Service() {
  return (
    <div>
      <header className="serviceheader">
        <Link to="/Info">
          <div className="servicelogo">
            <img className="serviceimg" src="/img/boomerang.png"></img>
          </div>
        </Link>
      </header>
      <div className="servicefirst">
        <div className="첫번째블럭">
            <div className="첫번째블럭왼쪽">
                <span className="이미모두의냉장고">이미 모두의 냉장고<br/>지금은 부메랑<br/></span>
                <span className="한사람">한 사람, 한 사람을 위해 시작한 냉장고<br/>더 많은 사람들이 찾는 모두의 냉장고가 되었습니다.<br/></span>
                <span className="사고">사고, 쓰고, 확인하고, 버리는<br/>당신의 모든 일이 바뀌고 있습니다.</span>
                <a href = "https://play.google.com/store/apps/details?id=com.boomerang.apps" style={{ textDecoration: "none" }}>
                <div className="playstore">
                    <img className="playstoreicon" src="https://cdn-icons-png.flaticon.com/128/300/300218.png"></img>
                    <span className="googleplay">Google play</span>
                </div>
                </a>
            </div>
            <div className="첫번째블럭오른쪽">
                <img className="부메랑gif" src="/img/boomerang.gif"></img>
            </div>
        </div>
      </div>
      <div className="servicesecond">
        <div className="두번째블럭">
            <div className="두번째블럭왼쪽">
                <img className="냉장고미리보기" src="/img/RefPreview.png"></img>
            </div>
            <div className="두번째블럭오른쪽">
                <span className="모바일">모바일로 더 손쉬운<br/>탄소량, 칼로리 확인<br/></span>
                <span className="음식의칼로리">음식의 칼로리, 탄소량 확인이 간편합니다.<br/>여러 개의 음식도 카메라로 확인할 수 있습니다.</span>
                <Link to="/Ref" style={{ textDecoration: "none" }}>
                <div className="냉장고바로가기">
                    <span className="서비스냉장고현황">냉장고 현황</span>
                    <img className="서비스냉장고현황뒤로가기" src="/img/back.png"></img>
                </div>
                </Link>
            </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="servicethird">
    <div className="세번째블럭">
        <div className="세번째블럭왼쪽">
          <span className="나무로알아보는">나무로 알아보는,<br/>탄소량 추측<br/></span>
          <span className="내가배출한">내가 배출한 탄소량이 지구에 얼마나 영향을 주는지 <br/>알고 있으신가요?</span>
          <span className="부메랑은">부메랑은 탄소량을 나무의 개수로 <br/>수치화하여 알려줍니다.</span>
          <span className="Math">탄소량(g) / 6500</span>
        </div>
        <div className="세번째블럭오른쪽">
            <div className="서비스나무flex">
        <img className="서비스나무" src="/img/tree.png"></img>
        <span className="서비스나무개수">0.92 그루</span>
        </div>
        </div>
    </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}
