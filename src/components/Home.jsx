import React from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

const Home = ({ setData }) => {
  const history = useNavigate();

  const [isData, setIsData] = React.useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      setData(jsonData);
      setIsData(true);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-[#f0ebe5] p-4 rounded shadow-lg">
      <input
        type="file"
        onChange={handleFileUpload}
        className="mb-4 p-2 border rounded bg-white border-gray-300"
      />
      <button
        className="bg-accent text-white py-2 px-4 rounded hover:bg-green-700"
        onClick={() => history("/statistics")}
        disabled={!isData}
      >
        بدء المسابقة
      </button>
    </div>
  );
};

export default Home;
