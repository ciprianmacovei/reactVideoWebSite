import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './components/search-box.js';
import VideoList from './components/video-list.js';
import VideoDetails from './components/video-details.js';
import YTSearch from 'youtube-api-search';


const api_Youtube_key = "AIzaSyD0d3JIi6fA65PuVdO86jRex9AGOwJrjq0";








class App extends Component {
	

	constructor(props){
		super(props);

		this.state = { videos: []}

		YTSearch({key:api_Youtube_key,term:'dorian popa'}, (videos) => {
		this.setState({videos});
		})

	}

	render(){

		return ( 
				<div>
					<div>Hi!</div>
					<SearchBox />
					<VideoDetails video={this.state.videos[0]}/>
					<VideoList videos={this.state.videos}/>
				</div> 
				);
	}
}	

ReactDOM.render(<App />,document.querySelector(".container"))