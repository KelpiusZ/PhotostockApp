import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar'
import Main from './Components/Main';
import NavBar from './Components/NavBar';
import ImageDetails from './Components/ImageDetails'
import { Link, Redirect, Route, Switch } from 'react-router-dom';


import Home from './Components/categories/Home';

import Photostock from './images/PhotoStock.png'


const archImages = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/1774931/pexels-photo-1774931.jpeg",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/534174/pexels-photo-534174.jpeg",
  }  
];

function App() {


  const searchOptions = {
    key: process.env.REACT_APP_PEXELS_API_KEY,
    per_page:25,
    api: 'https://api.pexels.com/v1',
    endpoint: '/search'
  };


  // const vidSearchOptions = {
  //   key: process.env.REACT_APP_PEXELS_API_KEY,
  //   per_page:25,
  //   api: 'https://api.pexels.com/videos',
  //   endpoint: '/search'
  // };


  const [searchString, setSearchString] = useState('people');

  // const [vidSearchString, setVidSearchString] = useState('travel')

  const [action, setAction] = useState('main');

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  // function vidHandleChange(event) {
  //   setVidSearchString(event.target.value);
  // }

  function handleSubmit(event) {
    event.preventDefault();
    getImages(searchString);
  }

  // function vidHandleSubmit(event) {
  //   event.preventDefault();
  //   getVideos(vidSearchString);
  // }


  const [images, setImages] = useState([]);

  // const [videos, setVideos] = useState([]);

  // useEffect(() => {

  //   getImages(searchString);

  // }, []);



  function getImages(searchString) {

    // const searchString = 'people'

    const url = `https://api.pexels.com/v1/search?query=${searchString}&lang=en`;

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


 const changeAction = (str) => {
    setAction(str)
 }



  return (

    <div className="App"> 

      <div>
        <Link to="/">
          <img className="new-logo" src={Photostock} alt="PhotoStock Logo"/>
        </Link>
      </div>

      <div className="app-navBar">
        <NavBar/>
      </div>



      <div className="app-header">

        <Header/>

      </div>



      <div className="app-searchBar">
        <SearchBar
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchString={searchString}
          />
      </div>



      {
        action === "main"
        && 
        <div className="app-main">

          
          
          <Main  changeAction={changeAction}/>


        </div>
      }
      
    </div>

  );

}

export default App;
