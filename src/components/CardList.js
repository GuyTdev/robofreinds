import React from 'react'
import Card from './Card'
//a function which converts the robot.js file(which get here as prpos)
//into an array of cards using map func.
const CardList =({robots})=>{
	/*an example of an uncought Error to see ErrorBoundry component influance
	if(true){
		throw new Error ('NOOOOOO!')
	}
	*/
	return robots.map((user)=> {
		return <Card key={user.id} 
					 id={user.id} 
					 name={user.name} 
					 email={user.email}/>
		    });
}
export default CardList; 