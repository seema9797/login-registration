
import React,{useState} from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Navabar'
import Login from './Login'
import Registration  from './Registration'
import MovieList from './MovieList'
//import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
function App() {

  return (
    <>
    <div className="outer">
        <div className="inner">
          <Registration />
        </div>
      </div>
    </>
  );
}
export default App;