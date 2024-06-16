import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WinnerCard = ({ data, reveal, setReveal }) => {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    let interval;

    if (reveal) {
      interval = setInterval(() => {
        const randomUser = data[Math.floor(Math.random() * data.length)];
        setCurrent(randomUser);
      }, 100); // Change users every 100ms
    }

    return () => clearInterval(interval);
  }, [reveal, data]);

  useEffect(() => {
    if (reveal) {
      setTimeout(() => {
        setReveal(false); // Stop revealing after 5 seconds
        // setCurrent to a specific winner if needed, otherwise it stays the last randomly picked user
      }, 4000);
    }
  }, [reveal, setReveal]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={variants}
          className="w-full min-w-60 mx-4 my-0 mt-0  bg-[#f0ebe5] p-4 rounded shadow"
        >
          <div className="backdrop:bg-white shadow-lg rounded-lg p-2 border border-gray-200">
            <p className="text-lg font-bold text-secondary text-center">
              {current?.name}
            </p>
            <p className="text-primary text-center">الرقم: {current?.number}</p>
            <p className="text-primary text-center">الطريق: {current?.path}</p>
            <p className="text-primary text-center">
              المركز: {current?.section}
            </p>
            <p className="text-primary text-center">جوال: {current?.phone}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Winners = ({ data }) => {
  const [winners, setWinners] = useState([]);
  const [revealStatus, setRevealStatus] = useState(Array(3).fill(false));
  const [currentReveal, setCurrentReveal] = useState(0);

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

  const handleRevealClick = () => {
    if (currentReveal < 3) {
      setRevealStatus((prev) =>
        prev.map((item, index) => (index === currentReveal ? true : item))
      );
      setCurrentReveal(currentReveal + 1);
    }
  };

  return (
    <div className="flex  rounded-xl bg-white bg-opacity-40 hight-maximize flex-col items-center  justify-evenly z-20 min-h-80 p-4  shadow-lg bg-transparent">
      <div className="absolute rounded-xl pattern top-0 left-0 w-full h-full opacity-80 z-[-2] bg-[#201b50] z-1 bg-opacity-30"></div>{" "}
      <h2 className="text-4xl font-bold mb-4 text-center text-primary">
        الفائزون في المسابقة الثقافية لطلبة الكلية
      </h2>
      <div className="flex flex-row items-center ">
        {winners.map((winner, index) => (
          <WinnerCard
            key={index}
            data={data}
            reveal={revealStatus[index]}
            setReveal={() =>
              setRevealStatus((prev) => {
                const newStatus = [...prev];
                newStatus[index] = false;
                return newStatus;
              })
            }
          />
        ))}
      </div>
      <button
        onClick={handleRevealClick}
        className="mt-8 bg-accent text-white py-2 px-4 rounded hover:bg-green-700"
        disabled={currentReveal > 2 || revealStatus.some((status) => status)}
      >
        {currentReveal > 2
          ? "تم اظهار الفائزين"
          : `اظهار الفائز رقم ${currentReveal + 1}`}
      </button>
    </div>
  );
};

export default Winners;
