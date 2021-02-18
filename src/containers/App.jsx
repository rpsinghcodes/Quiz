import React, {useState} from 'react';
import Header from './Header';
import Questions from './Questions'
import Footer from './Footer'
const App = () =>{
	const [isTimeOut, setTimeOut]  = useState(false);
	if(isTimeOut){
		return(
			<h1>Good By</h1>
		)
	}
	return(
		<div>
		<Header setTimeOut={setTimeOut}/>
		<Questions />
		</div>
		) 
}

export default App;