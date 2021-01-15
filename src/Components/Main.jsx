import React from 'react';


const Main = ({ images }) => {
    // let myphotos = images.photos
    
    // console.log(myphotos)

    // if(!images.length){
    //     { console.log(images.url)}
    //     return <h2>Still No Images Found! bruhhhhh</h2>
    // }
    
    return (
        
        <div className="main">

            {/* <h3>This is the main part of the page</h3> */}
            {images.photos.map(image =>{
                
                return (
                    
                    <div key={image.id}>
                        <img src={image.src.original}/>
                    </div>

                )   

            })}            
            
        </div>

    );

}

export default Main; 