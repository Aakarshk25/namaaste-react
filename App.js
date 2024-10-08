// const heading = React.createElement("h1",{id:"heading"},"hello world");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);//object is heading
// root.render(heading);
// ## Namaste React Course by Akshay Saini
// # Chapter 02 - Igniting our App

/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++ (Execute File when changes occur)
 * BUNDLING
 * MINIFY
 * Cleaning our Code (Example - Remove Console.log)
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev [Example - npx parcel index.html --https]
 * Port Number [Example - If port number using in localhost then it will change in port number in another project running on localhost]
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */

// imported react and reactdom from nodemodule folder
// import React from "react";
// import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1", { id: "heading" }, "Nmaste Aakarsh");
// // jsx - html -like or xml like syntax
// const jsxHeading =( <h1 className="heading">Namaste hiie jsx </h1>);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // to display in the browser that whuy we are using reactDOM
// root.render(heading);
// // root.render(jsxHeading); // Aak bar me aak hi chiz render krwa skte hai

import React from 'react';
import ReactDOM from 'react-dom/client';

// A component without return (implicit return)
const Tomp = () => <h1>without return</h1>;

const number = 10000;

// Functional component using return
const Comp = function () {
  return (
    <div className="head">
      <h1>Functional component using return</h1>
    </div>
  );
};

// Rendering all components properly
const Zomp = () => (
  <div  id="container">
    {number}
    <Tomp />
    {Comp()}
    <h1>All things are rendering here without return, and JS also works!</h1>
  </div>
);

// Fixed Komp component with proper JSX
const Komp = () => (
  <h1 className="head">
        <Tomp ></Tomp>
    Rendering the Tomp component inside Komp
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the Komp component in the browser
root.render(<Zomp />);

