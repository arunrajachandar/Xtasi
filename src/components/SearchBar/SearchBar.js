import React from 'react';
import './SearchBar.css';




class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {term:'',
      location:'',
     sortBy:'best_match'};
     this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleTermChange(event){
    this.setState({term: event.target.value})
  }
  handleLocationChange(event){
    this.setState({location: event.target.value})
   
  }
  getSortByClass(sortByOption){
    if(sortByOption ===this.state.sortBy){
      return 'active'
    } return ''
  }
  renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption =>{
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue} onClick ={this.handleSortByChange.bind(this, sortByOptionValue)}className={this.getSortByClass(sortByOptionValue)}>{sortByOption}</li>
        });
    }
    handleSortByChange(sortByOption){
      this.setState({sortBy: sortByOption})
   
    }
    handleSearch(event){
      event.preventDefault();
      const {term, location, sortBy} = this.state;
      this.props.searchYelp(term,location,sortBy)
      
    }
    render(){
        return (<div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit" >
          <button onClick={this.handleSearch}>Let's Go</button>
        </div>
      </div>)
    }

}


export default SearchBar;