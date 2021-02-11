import React from 'react';
import CardList from './CardList';
import BtnElement from './BtnElement';
import cardDescriptions from '../static/cardDescriptions';



function About() {
	
  return (
    <React.Fragment>
      	<div className="about-section">
      		<div className="cards-content">
      		  <CardList cardDescriptions={cardDescriptions}/>
      		</div>
      	</div>
    </React.Fragment>
  );
}

export default About;