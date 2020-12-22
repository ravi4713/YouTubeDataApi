import React from 'react';

class VideoSection extends React.Component{
    constructor(props){
        super(props)
        this.state={videos:[1]}
    }
    passId=(video)=>{
        this.props.videoId(video);
    }
    videoUpdate=()=>{
            const listvideo = (this.props.videolist).map((video)=>{
                return (
                    <div key={video.id.videoId} className='item' onClick={()=>{this.passId(video);}}>
                        <img className='ui image' src={video.snippet.thumbnails.medium.url}/>
                        <div className='content'>
                            <div className='header'>{video.snippet.title}</div>
                        </div>
                    </div>
                )
            })
            return listvideo;
    }
    
    render(){
        return <div className='ui relaxed divided list'>{this.videoUpdate()}</div>
    }
}

export default VideoSection;