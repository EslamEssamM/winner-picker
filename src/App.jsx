import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Winners from './components/Winners';
import Header from './components/Header';

const App = () => {
  const [data, setData] = useState([]);

  // const mockData = [
  //   { name: "محمد", number: 1, path: "الطريق الأول", section: "المركز الأول" },
  //   {
  //     name: "أحمد",
  //     number: 2,
  //     path: "الطريق الثاني",
  //     section: "المركز الثاني",
  //   },
  //   {
  //     name: "عبدالله",
  //     number: 3,
  //     path: "الطريق الثالث",
  //     section: "المركز الثالث",
  //   },
  //   { name: "علي", number: 4, path: "الطريق الرابع", section: "المركز الرابع" },
  //   {
  //     name: "عبدالرحمن",
  //     number: 5,
  //     path: "الطريق الخامس",
  //     section: "المركز الخامس",
  //   },
  // ];

  // useEffect(() => {
  //   setData(mockData);
  // }, []);
  return (
    <Router>
      <div className="min-h-screen bg-bgLight">
        <Header />
        <div className="container mx-auto p-4 bg-white rounded shadow-lg">
          <Routes>
            <Route path="/" element={<Home setData={setData} />} />
            <Route path="/statistics" element={<Statistics data={data} />} />
            <Route path="/winners" element={<Winners data={data} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
