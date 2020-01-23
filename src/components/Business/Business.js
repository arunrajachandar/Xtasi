import React from 'react';
import  './Business.css';



class Business extends React.Component{
    render(){
        
        const {imageSrc, name, address, city, state,zipCode, category,rating,reviewCount} = this.props.business;
        return (
            <div className="Business">
  <div className="image-container">
    <img src={imageSrc} alt={name}/>
  </div>
  <h2>{name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{address}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{zipCode}</p>
    </div>
    <div className="Business-reviews">
      <h3>{category}</h3>
      <h3 className="rating">{rating}</h3>
      <p>{reviewCount}</p>
    </div>
  </div>
</div>
        )
    }
}


export default Business;