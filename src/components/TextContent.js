import React from 'react';
import Typical from 'react-typical';

function TextContent() {
  return (
    <React.Fragment>
      <div className="tl">
      	<h1 className="text-content white">
      		Study,{' '}
	      	{<Typical
	      		        	steps={[
	      		        		'tracked.', 1500,
	      		        		'reimagined.', 1500,
	      		        		'redesigned.', 1500,
	      		        		'how it should be.', 2500
	      		        		]}
	      		        	loop={Infinity}
	      		        	wrapper="b"
	      		      	/>}
      	</h1>
      </div>
    </React.Fragment>
  );
}

export default TextContent;
