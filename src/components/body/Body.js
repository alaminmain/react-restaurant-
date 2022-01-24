import React from 'react';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import {
  
    Routes,
    Route,  Navigate 
} from "react-router-dom";

const Body = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={Home} />
                <Route path="/menu" exact element={<Menu />}/>
                <Route path="/contact" exact element={<Contact/>} />
                <Route path="/about" exact element={<About />} />
                <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
        </div>
    );
}
export default Body;