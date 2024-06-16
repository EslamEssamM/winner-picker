import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Winners from './components/Winners';
import Header from './components/Header';
import dataFile from "./data/data.json";
import Footer from './components/Footer';
import './App.css'; // Import the CSS file

const App = () => {
  const [data, setData] = useState([]);
  const readFile = () => {
    setData(dataFile)
  }
  useEffect(() => {
    readFile()
  }, []);
  return (
    <Router>
      <div className="min-h-screen  z-10   ">
        <div className="absolute main-bg top-0 left-0 w-full h-full z-[-5] bg-[#201b50] bg-opacity-30"> </div>
        <div className="absolute  top-0 left-0 w-full h-full z-[-2] bg-[#201b50]  bg-opacity-30"> 
          {" "}
        </div>
          {" "}
        <Header />
        <div className="container mx-auto p-4 relative  rounded shadow-lg">
          <Routes>
            <Route path="/" element={<Home setData={setData} />} />
            <Route path="/statistics" element={<Statistics data={data} />} />
            <Route path="/winners" element={<Winners data={data} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;