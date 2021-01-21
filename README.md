# Kelpius Zannou
## PhotoStock Application
![Take a picture](https://media.giphy.com/media/dZQr7GD78TTD2ocdl0/giphy.gif)
### Project Description
Welcome to PhotoStock!
PhotoStock is an application dedicated to sharing stock photography. PhotoStock is powered by a community of photographers from Pexels, who provide you with the best free high resolution photos. So if you're looking for a great background image for a project, or simply thinking of updating your phone's background image, PhotoStock is the application you have been waiting for. 


### Landing Page
![Landing page](https://imgur.com/viIhIte.png/)

### Image Details Page
![Image Details Page](https://imgur.com/51EvAAf.png)

### Wire Frames
![Wrireframe for Components hierarchy](https://imgur.com/9MCAUXI.png)

The image above illustrates the hierachy for the components.

![Landing Page](https://imgur.com/C9UlXkA.png)
The image above is a representation of the initial design for the landing page.

![Image Details Page](https://imgur.com/lFfG9DF.png)
The image above illustrates the initial design for the details page to each image once selected.

### List of Technologies Used
* HTML
* CSS
* React - JavaScript

### API Used
https://www.pexels.com/api/

Example of data returned from API - Photo Object
```
{
  "id": 2014422,
  "width": 3024,
  "height": 3024,
  "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
  "photographer": "Joey Farina",
  "photographer_url": "https://www.pexels.com/@joey",
  "photographer_id": 680589,
  "avg_color": "#978E82",
  "src": {
    "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
    "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
    "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
    "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
  }
}
```

### User Stories
The ideal user is someone who is interested in photography or simply wnats to update the background on any of their devices. The user will be able to utilize the search bar to find the photo that suits their needs. The user can also select from various categories listed in the header of the app to quickly find images as they relate to selected category. Once the user finds an image they find interesting, upon selecting that image, they will be redirected to a new page showing the photographer of the image. On the new image details page the user will also find a link leading to the photographer's account account on Pexels, where they will be able to browse for more related images.
