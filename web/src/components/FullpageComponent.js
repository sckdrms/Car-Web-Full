// FullpageComponents.js
import ReactFullpage from "@fullpage/react-fullpage";
import { useState } from 'react';

import Coredata from './CoredataComponents.js'
import Teampics from './TeampicComponents.js'

import '../css/fullpage.css';

function Fullpagecomponents(){

  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction });
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
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
              <Coredata></Coredata>
            </div>
            <div className="slide" id="page2-2">
              <p>page 2-2</p>
            </div>
            <div className="slide" id="page2-3">
              <p>page 2-3</p>
            </div>
          </div>
          <div className="section" id="page3-1">
            <Teampics></Teampics>
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