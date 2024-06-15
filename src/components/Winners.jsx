import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Winners = ({ data }) => {
  const [winners, setWinners] = useState([]);
  const [showWinners, setShowWinners] = useState([false, false, false]);
const [curr, setCurr] = useState(0);
  useEffect(() => {
    const selectedWinners = [];
    const uniqueIndexes = new Set();

    while (uniqueIndexes.size < 3 && uniqueIndexes.size < data.length) {
      const randomIndex = Math.floor(Math.random() * data.length);
      if (!uniqueIndexes.has(randomIndex)) {
        uniqueIndexes.add(randomIndex);
        selectedWinners.push(data[randomIndex]);
      }
      }
      

    setWinners(selectedWinners);
  }, [data]);

  const revealWinner = (index) => {
    setShowWinners((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
    setCurr(curr + 1);
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center text-primary">
        الفائزون
      </h2>
      <div className="flex flex-col items-center space-y-4">
        {winners.map((winner, index) => (
          <AnimatePresence key={index}>
            {showWinners[index] && (
              <motion.div
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={variants}
                className="w-full max-w-sm bg-[#f0ebe5] p-4 rounded shadow"
              >
                <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                  <p className="text-lg font-bold text-secondary text-center">
                    {winner?.name}
                  </p>
                  <p className="text-primary text-center">الرقم: {winner?.number}</p>
                  {/* <p className="text-primary">الطريق: {winner?.الطريق}</p>
                  <p className="text-primary">المركز: {winner?.المركز}</p>
                  <p className="text-primary">جوال: {winner?.جوال}</p> */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={() => revealWinner(curr)}
            className="bg-accent text-white py-2 px-4 rounded hover:bg-green-700"
            disabled={curr > 2}
              >
                  {curr > 2 ? "تم اظهار الفائزين" : `اظهار الفائز رقم ${curr + 1}`}
            </button>
      </div>
    </div>
  );
};

export default Winners;
