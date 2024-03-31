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
                <div className="grid-card">
                  <p className="grid-p">RPM</p>
                  <h4>분당회전수</h4>
                </div>
                <div className="grid-card">
                  <p className="grid-p">Speed</p>
                  <h4>속도</h4>
                </div>
                <div className="grid-card">
                  <p className="grid-p">Throttle Pos</p>
                  <h4>스로틀 개도량</h4>
                </div>
                <div className="grid-card">
                  <p className="grid-p">Timing Advance</p>
                  <h4>신호 수신기간</h4>
                </div>
                <div className="grid-card">
                  <p className="grid-p">Engine Load</p>
                  <h4>엔진 부하</h4>
                </div>
                <div className="grid-card card">
                  <p>Rapid Acceleration</p>
                  <div class="card__content">
                    <p class="card__title">Rapid Acceleration</p>
                    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <button class="card__button">Live Demo</button>
                    <button class="card__button secondary">Source Code</button>
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