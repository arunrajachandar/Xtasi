import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp.js';

// const business = {
//   imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// }

// const businesses =[
//   business,
//   business,
//   business,
//   business,
//   business,
//   business
// ];


class App extends React.Component {
  constructor(props){
    super(props);
  this.state ={
    businesses:[],
    errorMessage: ''
  }


  
    this.searchYelp = this.searchYelp.bind(this);
   this.sortByRatingAsc = this.sortByRatingAsc.bind(this);
   this.sortByRatingDesc = this.sortByRatingDesc.bind(this);
    this.resetBuilder = this.resetBuilder.bind(this);
  }
  get initialState() {
    return {
      businesses:[],
      errorMessage: ''
      };
  }

  resetBuilder() {
    this.setState(this.initialState);
  }

  searchYelp(term, location, sortBy){
      this.resetBuilder();    
      Yelp.search(term,location,sortBy).then(businesses=>{
        try{
         // console.log('Success')

          if(businesses.length>0){
        this.setState({businesses :businesses});
      }
    }
      catch(e){
        //console.log('failure')
        this.setState({errorMessage: 'The restaurant you searched for is not available. Please try some other restaurant'});
      }
    });
  }
  sortByRatingAsc=()=>{

    let sortedRatingAsc;
    sortedRatingAsc= this.state.businesses.sort((a,b)=>{
       return parseInt(a.rating)  - parseInt(b.rating);
    })

    this.setState({
        businesses:sortedRatingAsc
    })
}


sortByRatingDesc=()=>{

    let sortedRatingDsc;
    sortedRatingDsc= this.state.businesses.sort((a,b)=>{
       return parseInt(b.rating)  - parseInt(a.rating);
    })

    this.setState({
        businesses:sortedRatingDsc
    })
} 


  render(){
    let SortingComponent;
    if(this.state.businesses.length > 0){
      SortingComponent = <div className="Sorting-button"><ul className="ASCDESC">
        <li className="ASC" onClick={this.sortByRatingAsc}>
      Sort By Rating - ASC
    </li>
    <li className="DESC" onClick={this.sortByRatingDesc}>
      Sort By Rating - DESC
    </li>
        </ul></div>
    }
    return (
      <div className = "App">
      
  <h1>XStasi</h1>
      <SearchBar searchYelp={this.searchYelp}/>
        {SortingComponent}
         <BusinessList details={this.state.businesses} errorMessage={this.state.errorMessage}/>  
        
      
      </div>
    )
    }
  
}

export default App;
