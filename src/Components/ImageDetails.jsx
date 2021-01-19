import React, { useState,useEffect } from 'react';

function ImageDetails({ match }) {

    const [searchString, setSearchString] = useState({})
    const [images, setImages] = useState([]);

    useEffect (() => {

        getImages(searchString)

    }, []);

    function getImages(searchString) {

        // const searchString = 'people'
    
        const url = `https://api.pexels.com/v1/search?query=${searchString}/${match.params.id}&lang=en`;
    
        fetch(url, {
          headers: {
            'Authorization': '563492ad6f91700001000001a6d79f27bf194a228ce0730b063be31a'
          }
        })
        .then(response => response.json())
        .then(response => {
          // console.log(response)
          setImages(response);
        })
        .catch(console.error);
    
      };



    return (

        <div className="imageDetails">

            <img src={images.src}/>

            <div>

                <h2>Photographer: {images.photographer}</h2>

                <h3>
                    Find more from this photograper on <a href={images.photographer_url}>Pexels</a>.
                 </h3>
                 
            </div>
            
        </div>

    );

}

export default ImageDetails;