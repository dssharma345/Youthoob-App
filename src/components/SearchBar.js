import React, {Component} from 'react'

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state={
            term: ''
        }
    }
    onFormSubmit=(event)=>{
        event.preventDefault()
        this.props.search(this.state.term)
    }
    onInputChange=(event)=>{
        this.setState({term: event.target.value})
    }
    render(){
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                <label>Video Search</label>
                <input type="text" value={this.state.term} onChange={this.onInputChange} /> 
                </div>
                </form>
            </div>
        )
    }
}
export default SearchBar