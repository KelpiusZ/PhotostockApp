import React, { useState, useEffect } from 'react';

function Drinks() {

    const searchOptions = {
        key: process.env.REACT_APP_PEXELS_API_KEY,
        per_page:25,
        api: 'https://api.pexels.com/v1',
        endpoint: '/search'
      };
    
      const [searchString, setSearchString] = useState('drinks');
    
      function handleChange(event) {
        setSearchString(event.target.value);
      }
    
    //   function handleSubmit(event) {
    //     event.preventDefault();
    //     getImages(searchString);
    //   }
    
    
      const [images, setImages] = useState([]);
    
      useEffect(() => {
    
        getImages(searchString);
    
      }, []);
    
    
    
      function getImages(searchString) {
    
        const url = `https://api.pexels.com/v1/search?query=${searchString}&lang=en`;
    
        fetch(url, {
          headers: {
            'Authorization': '563492ad6f91700001000001a6d79f27bf194a228ce0730b063be31a'
          }
        })
        .then(response => response.json())
        .then(response => {
          console.log(response)
          setImages(response);
        })
        .catch(console.error);
    
      };

    let drinksPhotos = images.photos


    return (


        <div className="arch-link">

            {/* <button onClick={() => {changeAction('main')}}>Back</button> */}
            {drinksPhotos && images.photos.map(image =>{
                
                return (
                    
                    <div key={image.id}>
                        <img src={image.src.original}/>
                    </div>

                )   

            })}            
            
        </div>

    );

}

export default Drinks;