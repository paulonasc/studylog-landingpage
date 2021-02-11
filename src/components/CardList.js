import React from 'react';
import Card from './Card';
import cardDescriptions from '../static/cardDescriptions';


function CardList({cardDescriptions}, id) {
	
  return (
    <React.Fragment>
      	<Card title={cardDescriptions[0].title} list1={[cardDescriptions[0].list1, <span key={id} className="accurately-text i light-red">accurately</span>]} list2={cardDescriptions[0].list2} list3={cardDescriptions[0].list3}/>
    	<Card title={cardDescriptions[1].title} list1={cardDescriptions[1].list1} list2={cardDescriptions[1].list2} list3={cardDescriptions[1].list3} />
    </React.Fragment>
  );
}

export default CardList;