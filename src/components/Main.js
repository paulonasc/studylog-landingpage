import React from 'react';
import Header from './Header';
import TextContent from './TextContent';
import BtnElement from './BtnElement';
import AnnouncementBar from './AnnouncementBar';

function Main() {
  return (
    <React.Fragment>
    	<div className="main-section">
    		<AnnouncementBar />
	    	<Header />
	    	<TextContent className="pt3 mt5 mb0 flex flex-wrap"/>
            <BtnElement />
    	</div>
    </React.Fragment>
  );
}

export default Main;
