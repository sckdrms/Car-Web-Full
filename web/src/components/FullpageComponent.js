import React, { useState } from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import Coredata from './CoredataComponents'; 
import Teampics from './TeampicComponents'; 
import Footer from './FooterComponents'

import '../css/fullpage.css';

function FullpageComponents() {
  const [isSectionTwoVisible, setIsSectionTwoVisible] = useState(false);
  const [isSectionThreeVisible, setIsSectionThreeVisible] = useState(false);

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
      afterLoad={afterLoad}
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className="slide" id="page1-1">
              <p className="page1-1-text">Team
              <p>Alpha Circle</p>
            </p></div>
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
