;

    const apiKey ='';

const Yelp ={
    search: async function(term, location, sortBy){
            const urlToFetch = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;        
        const response = await fetch(urlToFetch,{headers:{Authorization: `Bearer ${apiKey}`}});
        try{
            

            const jsonResponse = await response.json();
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business =>{
                        return {                
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count}
                                }
                        );
            
            
        } 

        }catch(e){
            console.log(e+'API responded back nothing');
        }
        
                   
    }
};

export default Yelp;
