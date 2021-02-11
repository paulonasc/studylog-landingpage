import React from 'react';

function Card({title, list1, list2, list3}) {
  return (
    <React.Fragment>
      <div className="one-card tc bg-dark-gray white br3 pa5 pt0 mt4 grow bw2">
      	<h2>{title}</h2>
        <hr style={{width:"45%"}}></hr>
      	<ul className="tl">
      		<li className="mb3">{list1}</li>
      		{list2 ? <li className="mb3">{list2}</li> : null}
      		{list3 ? <li className="mb3">{list3}</li> : null}
      	</ul>
      </div>
    </React.Fragment>
  );
}

export default Card;
