import React , {Component} from 'react';

class SearchBox extends Component {

	constructor(props){
		super(props);
	}


	onInputChange = (e) => {
		console.log(e.target.value);
	}


	render(){
		return (
			<div>
			<input type="text" onChange={this.onInputChange}/>
			</div>
		);
	}
}


export default SearchBox;