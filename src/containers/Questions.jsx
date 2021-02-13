import React from 'react';
import QuestionNo from './QuestionNo';
import Qs from '../Questions';
const Questions=()=>{

	return(
		<div className='container'>
		<div className='questionandNumber'>
			<div className='questions'>
			Q1.What is the Full Form of CSS?
			{Qs[0].Question}
			</div>
			<div className='options'>
			<form method='post'>
			<h3><input type="radio" name="option" value='xyz'/>
			Cascade style Standard</h3>
			<h3><input type="radio" name="option" />Cascade style Sheet</h3>
			<h3><input type="radio" name="option" />Cascade Stylish Sheet</h3>
			<h3><input type="radio" name="option" />Common style Standard</h3>
			</form>
			</div>
			</div>
			<div className='questionNo'>
				<QuestionNo />
			</div>
		</div>
		)
}


export default Questions