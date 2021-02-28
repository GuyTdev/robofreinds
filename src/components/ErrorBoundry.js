import React, {Component} from 'react'

class ErrorBoundry extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasError : false
		}
	}

	//only in React 16^ 
	componentDidCatch(error,info){
		this.setState({hasError:true});

	}
	render(){
		if(this.state.hasError){
			return <h1> Opps that is no good..</h1>;
		}
		return this.props.children;
	}
}
export default ErrorBoundry;