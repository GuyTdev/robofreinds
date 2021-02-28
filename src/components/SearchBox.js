import React from 'react'

const SerachBox = ({searchChange}) => {
	return(
		<div className='pa2'>
		<input 
		className='pa3 ba b--green bg-lightest-blue'
		type='search' 
		placeholder='serach robot'
		onChange={searchChange} />
		</div>
	);
}
export default SerachBox;