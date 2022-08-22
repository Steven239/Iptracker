# Frontend Mentor - IP address tracker solution

This is my solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size. The project

** This project is currently NOT optimized for mobile. **

- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses and see the key information and location

### Screenshot

See "Design" Folder

### Links

- Solution URL: Coming Soon
- Live Site URL: Coming Soon

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [Ipapi](https://ipapi.co/)
- [React Leaflet](https://react-leaflet.js.org/)

### What I learned

This has easily become of my favorite projects because of how challenging it was. This project required a lot of
critical thinking and a whole lot more research. Here's a list of things that I learned while working on this project

- Styling elements using Styled Components.
- Using the useRef hook to update state without causing React to re-render. This was huge!!
- Intergrate the React Leaflet in my project so that I can initialize the map
- How to set a Background image
- Using z-index to bring a div forward
- Using the useMapEvents to set the map to the current longitude and latitude location provide in the API response.

To see how you can add code snippets, see below:

```js
const prevData = useRef(mapData.ip);
```

```js
const StyledHeadline = styled.h1`
  color: white;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 400px;
`;

const StyledSearchBar = styled.div`
  text-align: center;
  width: 100%;
  padding-bottom: 65px;
`;

const StyledInfoDiv = styled.div`
  width: 80%;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
  position: absolute;
  top: 100px;
  right: 70px;
  z-index: 2;
`;
```

### Continued development

### Useful resources

- [Map Events for Leaflet](https://leafletjs.com/examples/quick-start/) - This is the document that I use to initialize the map
- [React Leaflet](https://react-leaflet.js.org/) - I had to use this documentation since the map is being initialized
  inside of a React App
- [useRef](https://www.w3schools.com/react/react_useref.asp) - I read this to get a better understanding of the useRef hook
- [Ipapi](https://ipapi.co/) - Free source for getting an API to find a location
- [CORS Issues](https://www.youtube.com/watch?v=hxyp_LkKDdk&t=1296s) - I ran into an issue trying to hit the API. Initial it wouldn't allow me to hit the API because of a proxy issue. This YouTube video show how to fix this issue.

## Author

Coming soon

## Acknowledgments

WAYYY to many to list.
