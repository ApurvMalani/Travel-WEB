import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Routs/home';
import About from './Routs/about';
import Service from './Routs/service';
import Contact from './Routs/contact';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>


    </div>
  );
}

export default App;
