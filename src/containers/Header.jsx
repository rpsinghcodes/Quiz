import React, {useState} from 'react';

const Header = () =>{
    const startTime = Math.floor(new Date().getTime() /10000);
    const [timeElapsed, setTimeElapsed] = useState(
    Math.floor(new Date().getTime() /1000) - startTime);
    
    let y =()=> setTimeElapsed((new Date().getTime() /10000) - startTime)
    
    // console.log(setInterval(y, 2000))
	return(
		<header>
    <div className='studentDetail'>
        <h3>Name:xyz</h3>
        <h3>RollNumber:xyz</h3>
        <h3>Title of Paper</h3>
    </div>
    <div className='time'>
        <h3 >Total Time</h3>
        <h3 >Time Remaining</h3>
    </div>
</header>
	)
}
export default Header