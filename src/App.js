
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar'
import Main from './Components/Main';
import Footer from './Components/Footer';


// const images = [
//   {
//     id: 2014422,
//     url: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
//   },
//   {
//     id: 2014422,
//     url: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
//   },
//   {
//     id: 2014422,
//     url: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
//   }  
// ];

function App() {

  const searchOptions = {
    key: process.env.REACT_APP_PEXELS_API_KEY,
    per_page:25,
    api: 'https://api.pexels.com/v1',
    endpoint: '/search'
  };

  const [searchString, setSearchString] = useState('people');

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getImages(searchString);
  }


  const [images, setImages] = useState([]);

  useEffect(() => {

    getImages(searchString);

  }, []);



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




  return (

    <div className="App"> 

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

      <div className="app-main">
        <Main images={images}/>
      </div>

      <div className="app-footer">
        <Footer/>
      </div>

      
    </div>

  );

}

export default App;
