// FullpageComponents.jsx
import ReactFullpage from "@fullpage/react-fullpage";

import '../css/fullpage.css';

function Fullpagecomponents(){

  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction });
  };

  return(
    <>
      <ReactFullpage
      debug // Debug logging
      navigation
      anchors={["1", "2", "3", "4"]}
      sectionSelector=".section"
      slidesNavigation={true} // Enable navigation bullets for slides
      onLeave={onLeave}
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className="slide" id="page1-1">
            <p className="page1-1-text">Team
              <p>Alpha Circle</p>
            </p>
            </div>
            <div className="slide" id="page1-2">
              <p>page 1-2</p>
            </div>
          </div>
          <div className="section">
            <div className="slide" id="page2-1">
              <p>Core Data</p>
              <div className="grid-container">
                <div className="grid-card card">
                <p>RPM</p>
                  <div class="card__content">
                    <p class="card__title">RPM</p>
                    <p class="card__description">바퀴의 분당 회전수를 나타내는 데이터</p>
                    <button class="card__button">
                      <a href="#">For More</a>
                    </button>
                    {/* <button class="card__button secondary">Source Code</button> */}
                  </div>
                </div>
                <div className="grid-card card">
                <p>Speed</p>
                  <div class="card__content">
                    <p class="card__title">Speed</p>
                    <p class="card__description">속도 기록을 통해 차량이 얼마나 빠르게 가속했는지를 나타내는 데이터</p>
                    <button class="card__button">
                      <a href="#">For More</a>
                    </button>
                  </div>
                </div>
                <div className="grid-card card">
                <p>Throttle Pos</p>
                  <div class="card__content">
                    <p class="card__title">Throttle Pos</p>
                    <p class="card__description">엑셀 발판 위치를 나타내는 데이터</p>
                    <button class="card__button">
                      <a href="#">For More</a>
                    </button>
                  </div>
                </div>
                <div className="grid-card card">
                <p>Timing Advance</p>
                  <div class="card__content">
                    <p class="card__title">Timing Advance</p>
                    <p class="card__description">엔진 제어 시스템이 가속을 위해 연료의 점화 타이밍을 조정하고 있음을 나타내는 테이터</p>
                    <button class="card__button">
                      <a href="#">For More</a>
                    </button>
                  </div>
                </div>
                <div className="grid-card card">
                <p>Engine Load</p>
                  <div class="card__content">
                    <p class="card__title">Engine Load</p>
                    <p class="card__description">엔진이 많은 출력을 내고 있으며 차량이 빠르게 가속하고 있음을 나타내는 데이터</p>
                    <button class="card__button">
                      <a href="#">For More</a>
                    </button>
                  </div>
                </div>
                <div className="grid-card card">
                  <p>Rapid Acceleration</p>
                  <div class="card__content">
                    <p class="card__title">Rapid Acceleration</p>
                    <p class="card__description">운전자가 급가속을 했는지 여부를 직접적으로 나타내는 데이터</p>
                    <button class="card__button">
                      <a href="#">For More</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide" id="page2-2">
              <p>page 2-2</p>
            </div>
            <div className="slide" id="page2-3">
              <p>page 2-3</p>
            </div>
          </div>
          <div className="section" id="page3-1">
            <p>3 page</p>
          </div>
          <div className="section" id="page4-1">
            <p>4 page</p>
          </div>
        </ReactFullpage.Wrapper>
    )}
    />
    </>
  );
}

export default Fullpagecomponents;