import React from 'react';
import lodash from 'lodash';
const QuestionNo = (props) =>{
			let card = [];
lodash.times(50, (i) => {
  card.push(<button name={i} id={props.id}>1</button>);
});
	return(
	<div >
		{card}
		<button>Submit</button>
		</div>
		)
}


export default QuestionNo