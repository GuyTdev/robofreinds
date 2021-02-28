import React , {Component} from 'react'
import {robots} from './robots'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
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
		const filteredRobots = this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase())
		})
		return(<div className='tc'>
					<div>
						<h1 className='f1'>RoboFreinds App</h1>
				    	<SearchBox searchChange={this.onSearchChange}/>
				    </div>
				    <Scroll>
			    	<CardList robots={filteredRobots}/>
			    	</Scroll>
			   </div>
	    )
   }
}
export default App;