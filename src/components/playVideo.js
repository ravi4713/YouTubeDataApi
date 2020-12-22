import React from 'react';

class PlayVideo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        if (this.props.videoForPlay == null){
            return <div></div>
        }
        const videoUrl = "https://www.youtube.com/embed/"+this.props.videoForPlay.id.videoId
        return (
            <div className='ui segment'>
                <div className='ui embed'>
                <iframe src={videoUrl}/>
                    
                </div>
            </div>
        )
    }
}

export default PlayVideo;