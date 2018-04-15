import React from 'react';

const VideoList = (props) => {
    return (
        <ul className="col-nd-4 list-group">
            <li>{props.videos.length}</li>
        </ul>
    );
}

export default VideoList;