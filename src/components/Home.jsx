import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setData }) => {
  const history = useNavigate();




  return (
    <div className="flex flex-col h-96 items-center justify-center p-4 rounded shadow-lg bg-transparent">
      {/* backdrop */}
      <div className="text-center mt-24">
        <h1 className="text-6xl  font-bold text-white">
          المسابقة الثقافية لطلبة الكلية
        </h1>
        <p className="mt-4 text-3xl  text-secondary">موسم الحج لعام 1445 هـ</p>
      </div>
      <button
        className="bg-secondary text-xl text-white mt-16 py-4 px-8 rounded hover:bg-green-700 "
        onClick={() => history("/winners")}
      >
        بدء الفرز
      </button>
    </div>
  );
};

export default Home;
