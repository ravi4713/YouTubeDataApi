import React from 'react';
import SearchBar from './Searchbar';
import youtube from './apis/youtube'
import VideoSection from './Videosection';
import PlayVideo from './playVideo'
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            videos:[],
            video:null
        }
    }
    onTermSubmit=async (term)=>{
        const res = await youtube.get('/search',{
            params:{
                q:term
            }
        });
        this.setState({videos:res.data.items})
    }
    setvideoId = (term)=>{
        this.setState({video:term})
    }
    render(){
        return (
            <div className='ui container'>
                <SearchBar getTerm={this.onTermSubmit}/>
                <PlayVideo videoForPlay={this.state.video}/>
                <h1>Total video Fetched: {this.state.videos.length}</h1>
                <VideoSection videolist = {this.state.videos} videoId={this.setvideoId}/>
            </div>
        )
    }
}

export default App;