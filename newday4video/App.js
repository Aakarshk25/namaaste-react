// import React from 'react';
// import ReactDOM from 'react-dom/client';

/**
 * header
 * logo
 * navitem
 * body
 * search
 * resturant Container
 * resturant card
 * footer
 * copyright
 * links 
 * address
 * contact
 */

import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from "./Components/Header/Header.jsx"
import Body from "./Components/Body/Body.jsx"
import Footer from "./Components/Footer/Footer.jsx"

  const Zomp =() =>{
    return(
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }



const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the Komp component in the browser
root.render(<Zomp />);
