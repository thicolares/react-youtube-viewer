import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props) => {
    return (
        <ul className="col-nd-4 list-group">
            {props.videos.map( video => <div>1</div>)}
        </ul>
    );
}

export default VideoList;