import React from 'react';
import { Link } from 'react-router-dom';

const Main = ({ images }) => {
    let myphotos = images.photos
    
    // console.log(myphotos)

    // if(!images.length){
    //     { console.log(images.url)}
    //     return <h2>Still No Images Found! bruhhhhh</h2>
    // }
    
    return (
        
        <div className="main">

            {/* <h3>This is the main part of the page</h3> */}
            {/* Use the guard operator (myphotos) before mapping so you do not get an error when reloading the page. */}
            {myphotos && images.photos.map(image =>{
                
                return (
                    
                    <Link>

                    <div key={image.id} className="img-results">
                        <img src={image.src.original}/>
                    </div>

                    </Link>

                )   

            })}   

        </div>

            

    );

}

export default Main; 