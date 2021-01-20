import React from 'react';
import { Route } from 'react-router-dom';

import Architecture from './categories/Architecture';
import Interiors from './categories/Interiors';
import Fashion from './categories/Fashion';
import Nature from './categories/Nature';
import Travel from './categories/Travel';
import Drinks from './categories/Drinks';
import Food from './categories/Food';

const Main = ({ Home, ImageDetails, images, setImages, changeAction }) => {
    let myphotos = images.photos
    
    // console.log(myphotos)

    // if(!images.length){
    //     { console.log(images.url)}
    //     return <h2>Still No Images Found! bruhhhhh</h2>
    // }
    
    return (
        
        <div className="main">

            <Route path="/details/:id" 
                 render={(routerProps) => <ImageDetails match={routerProps.match}/>}/>
          
            <Route exact path="/" render={() => <Home setImages={setImages} images={images}/> } />

            <Route exact path="/architecture" component={Architecture}/>
            <Route exact path="/interiors" component={Interiors}/>
            <Route exact path="/fashion" component={Fashion}/>
            <Route exact path="/nature" component={Nature}/>
            <Route exact path="/travel" component={Travel}/>
            <Route exact path="/drinks" component={Drinks}/>
            <Route exact path="/food" component={Food}/>


        </div>

                   

    );

}

export default Main; 