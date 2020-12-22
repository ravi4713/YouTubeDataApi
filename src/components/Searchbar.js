import React from 'react';

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state= {term:''}
    }
    onChangeForm = (e)=>{
        this.setState({term:e.target.value})
    }
    onFormSubmit = (e)=>{
        e.preventDefault();
        this.props.getTerm(this.state.term)
    }
    render(){
        return (
            <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="ui field">
                    <label><h3>Search</h3></label>
                    <input type="text" onChange={this.onChangeForm}/>
                </div>
            </form>
        </div>
        )
    }
}

export default Searchbar;