import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Service from './Components/Service/Service';
import Project from './Components/Project/Project';
import {Routes,Route} from 'react-router-dom'
import Contact from './Components/ContectUs/ContectUs';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <ScrollToTop/>
      <main className="flex-grow pt-14 md:pt-16">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contect-us' element={<Contact/>}/>
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
