import React from 'react';
import lodash from 'lodash';
const QuestionNo = () =>{
			let card = [];
lodash.times(50, (i) => {
  card.push(<button name={i}>1</button>);
});
	return(
	<div >
		{card}
		</div>
		)
}


export default QuestionNo