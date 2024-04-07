import React, { useState, useEffect } from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import Coredata from './CoredataComponents';
import Teampics from './TeampicComponents';
import Footer from './FooterComponents';

import '../css/fullpage.css';

function FullpageComponents() {
  // 윈도우의 너비가 768px 미만인지 확인하여 모바일 상태를 설정합니다.
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSectionTwoVisible, setIsSectionTwoVisible] = useState(false);
  const [isSectionThreeVisible, setIsSectionThreeVisible] = useState(false);

  // 윈도우의 크기가 변경될 때마다 isMobile 상태를 업데이트합니다.
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // resize 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 섹션이 로드된 후 호출되는 함수입니다. 섹션의 가시성 상태를 업데이트합니다.
  const afterLoad = (origin, destination, direction) => {
    setIsSectionTwoVisible(destination.index === 1);
    setIsSectionThreeVisible(destination.index === 2);
  };

  return (
    <ReactFullpage
      navigation
      anchors={["1", "2", "3", "4"]}
      sectionSelector=".section"
      slidesNavigation={true}
      controlArrows={!isMobile} // 모바일에서는 화살표를 비활성화합니다.
      afterLoad={afterLoad}
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className="slide" id="page1-1">
              <p className="page1-1-text">Team
                <p>Alpha Circle</p>
              </p>
            </div>
            <div className="slide" id="page1-2"><p>page 1-2</p></div>
          </div>
          <div className="section">
            <div className="slide" id="page2-1"><Coredata isVisible={isSectionTwoVisible} /></div>
            <div className="slide" id="page2-2"><p>page 2-2</p></div>
            <div className="slide" id="page2-3"><p>page 2-3</p></div>
          </div>
          <div className="section" id="page3-1"><Teampics isVisible={isSectionThreeVisible} /></div>
          <div className="section" id="page4-1"><Footer style={{overflowY:'hidden'}}></Footer></div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
}

export default FullpageComponents;
