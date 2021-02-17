import React, {useState} from 'react';
import QuestionNo from './QuestionNo';
import questions_data from '../Data/questions_data';
import Footer from './Footer'

const Questions=()=>{
	const [questionNumber, setQuestionNumber] = useState(0);
	var showNext = true;
	const nextQuestion = () =>{
		console.log('questionNumber', questionNumber);
		if(questionNumber === 8){
			showNext= false;
		}
		setQuestionNumber(questionNumber+1);
	}
	const handleSeletectedQuestion = (event) =>{
		console.log(event.target.value)
	}
	const prevQuestion = () =>{
		setQuestionNumber(questionNumber-1);
	}
	const {que, optA, optB, optC, optD} = questions_data[questionNumber];
	return(
		<div>
		<div className='container'>
		<div className='questionandNumber'>
			<div className='questions'>
			Q1.{que}
			</div>
			<div className='options'>
			<form method='post'>
			<h3><input type="radio" onClick={handleSeletectedQuestion} name="option" value={que + " "+ optA} checked={(false ? "checked" : undefined)} />{optA}</h3>
			<h3><input type="radio" onClick={handleSeletectedQuestion} name="option" value='B' checked={(false ? "checked" : undefined)}/>{optB}</h3>
			<h3><input type="radio" onClick={handleSeletectedQuestion} name="option" value='C' checked={(false ? "checked" : undefined)} />{optC}</h3>
			<h3><input type="radio" onClick={handleSeletectedQuestion} name="option" value='D' checked={(false ? "checked" : undefined)} />{optD}</h3>
			</form>
			</div>
			</div>
			<div className='questionNo'>
				<QuestionNo key={questions_data.id} id={questions_data.id} />
			</div>
			</div>
			<Footer  next={nextQuestion} prev={prevQuestion} display = {questionNumber}/>
		</div>
		)
}


export default Questions