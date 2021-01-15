import React from 'react';


const Main = ({ images }) => {

    // console.log(images)

    if(!images.length){
        { console.log(images.url)}
        return <h2>Still No Images Found! bruhhhhh</h2>
    }

    // console.log(images)
    return (

        <div className="main">

            <h3>This is the main part of the page</h3>
            {images.map(image =>(
                <div key={image.id}>
                    <img src={image.images.url}/>
                </div>
            ))}            
            
        </div>

);

}

export default Main; 