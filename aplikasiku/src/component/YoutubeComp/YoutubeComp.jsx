import React from "react";
import './YoutubeComp.css';
import gambar from './biru.jpg'

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
        <div className="image-thumb">
            <img src={gambar} alt=""/>
            <p className="time">{props.time}</p>
        </div>
        <p className="title">title here</p>
        <p className="desc">desc here</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00.00'
}
export default YoutubeComp;