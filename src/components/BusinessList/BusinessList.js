import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

class BusinessList extends React.Component{

  
    render(){
      let renderContent;  
      if(this.props.errorMessage){
        console.log('error')
        renderContent = <h1>{this.props.errorMessage}</h1>
    }
        else{
          console.log('fine')
          renderContent  = this.props.details.map((e,i)=>
          
          <Business key={e.id} business={e}/>);
        }

        return(<div className="BusinessList">{renderContent}</div>);
    }
}


export default BusinessList;