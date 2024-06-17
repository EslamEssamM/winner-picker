import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WinnerCard = ({ data,no, reveal, setReveal, winners }) => {
  const [current, setCurrent] = useState(null);
  const [pulse, setPulse] = useState(false);

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
        setCurrent(winners[no]);

      }, 4000);
    }
  }, [reveal, setReveal]);

  useEffect(() => {
    if (!reveal && current) {
      const pulseInterval = setInterval(() => {
        setPulse((prevPulse) => !prevPulse);
      }, 200000); // Pulse every 500ms

      return () => clearInterval(pulseInterval);
    }
  }, [reveal, current]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: pulse ? 1.1 : 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className=" w-1/3 max-w-96  mx-4 my-0 mt-0  bg-[#f0ebe5] p-4 rounded shadow"
        >
          <div className="backdrop:bg-white shadow-lg rounded-lg p-2 border border-gray-200">
            <p className="text-lg font-bold  text-center text-green-700">
              {`الفائز رقم ${no + 1}`}
            </p>
            <p className="text-lg font-bold text-secondary text-center text-nowrap">
              {current?.name}
            </p>
            <table className="table-auto text-center w-full">
              <tbody>
                <tr>
                  <td className="border px-4 py-2">{current?.number}</td>
                  <td className="border px-4 py-2 text-primary">الرقم</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">{current?.path}</td>
                  <td className="border px-4 py-2 text-primary">الطريق</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">{current?.section}</td>
                  <td className="border px-4 py-2 text-primary">المركز</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">{current?.depart}</td>
                  <td className="border px-4 py-2 text-primary">القسم</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">{current?.phone}</td>
                  <td className="border px-4 py-2 text-primary">جوال</td>
                </tr>
              </tbody>
            </table>{" "}
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
    console.log(selectedWinners);
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
    <div className="flex relative  rounded-xl bg-white bg-opacity-100 hight-maximize flex-col items-center  justify-evenly z-20 min-h-80 p-4  shadow-lg bg-transparent">
      <div className="absolute rounded-xl pattern top-0 left-0 w-full h-full opacity-30 z-[-2] bg-[#201b50] z-1 bg-opacity-30"></div>{" "}
      <h2 className="text-4xl font-bold mb-4 text-center text-primary">
        الفائزون في المسابقة الثقافية لحج عام 1445هـ
      </h2>
      <div className="w-full flex flex-row-reverse  justify-evenly   ">
        {winners.map((winner, index) => (
          <WinnerCard
            key={index}
            no={index}
            data={data}
            winners={winners}
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
          : `اختيار الفائز رقم ${currentReveal + 1}`}
      </button>
    </div>
  );
};

export default Winners;
