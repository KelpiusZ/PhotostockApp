import React from 'react';
import { Route } from 'react-router-dom';

import Architecture from './categories/Architecture';
import Interiors from './categories/Interiors';
import Fashion from './categories/Fashion';
import Nature from './categories/Nature';
import Travel from './categories/Travel';
import Drinks from './categories/Drinks';
import Food from './categories/Food';
import Home from './categories/Home';

const Main = ({ ImageDetails, images, setImages, photos }) => {

    
    return (
        
        <div className="main">

            <Route path="/details/:id" 
                 render={(routerProps) => <ImageDetails match={routerProps.match}/>}/>
          
            {/* <Route exact path="/" render={() => <Home setImages={setImages} images={images} photos={photos} /> } /> */}
            <Route exact path="/" component={Architecture}/>

            <Route exact path="/Architecture" component={Architecture}/>
            <Route exact path="/Interiors" component={Interiors}/>
            <Route exact path="/Fashion" component={Fashion}/>
            <Route exact path="/Nature" component={Nature}/>
            <Route exact path="/Travel" component={Travel}/>
            <Route exact path="/Drinks" component={Drinks}/>
            <Route exact path="/Food" component={Food}/>


        </div>

                   

    );

}

export default Main; 