import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Home({ images, setImages }) {

    const searchOptions = {
        key: process.env.REACT_APP_PEXELS_API_KEY,
        per_page:25,
        api: 'https://api.pexels.com/v1',
        endpoint: '/curated'
      };
    
      const [searchString, setSearchString] = useState();
    
      function handleChange(event) {
        setSearchString(event.target.value);
      }
    
    //   function handleSubmit(event) {
    //     event.preventDefault();
    //     getImages(searchString);
    //   }
    
    
      // const [images, setImages] = useState([]);
    
      useEffect(() => {
    
        getImages(searchString);
    
      }, []);
    
    
    
      function getImages(searchString) {
    
        const url = `https://api.pexels.com/v1/curated`;
    
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

    let homePhotos = images.photos


    return (


        <div className="arch-link">

            {/* <button onClick={() => {changeAction('main')}}>Back</button> */}
            {homePhotos && images.photos.map(image =>{
                
                return (
                    
                  <Link to={`/details/${image.id}`}>

                    <div key={image.id}>
                        <img src={image.src.original}/>
                    </div>

                  </Link>


                )   

            })}     


            
        </div>

    );

}

export default Home;