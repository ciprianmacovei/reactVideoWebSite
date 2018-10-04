import React from 'react';


const VideoDetails = ({video}) => {

	if (!video){
		return <div>Loading...</div>;
	}

	const videoUrl = `https://wwww.youtube.com/embed/${video.id.videoId}`;

	

	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" />
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snoppet.description}</div>
			</div>
		</div>
	);
	
};



export default VideoDetails;