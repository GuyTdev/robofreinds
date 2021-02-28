import React , {Component} from 'react'
import {robots} from '../components/robots'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

import './App.css'
class App extends Component{
	constructor(){
	 super();
	 this.state = {
	 	robots: [],
	 	searchfeild: ''
     }
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(usersArray => this.setState({robots: usersArray}))
	}

	onSearchChange = (event)=>{
		this.setState({searchfeild:event.target.value})
	}

	render(){
		const filteredRobots = this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfeild.toLowerCase())
		})
		return(<div className='tc'>
					<div>
						<h1 className='f1'>RoboFreinds App</h1>
				    	<SearchBox searchChange={this.onSearchChange}/>
				    </div>
				    <Scroll>
				    	<ErrorBoundry>
			    			<CardList robots={filteredRobots}/>
			    		</ErrorBoundry>
			    	</Scroll>
			   </div>
	    )
   }
}
export default App;