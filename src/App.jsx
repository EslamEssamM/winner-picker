import React, { useState } from "react";
import * as XLSX from "xlsx";
import "./App.css";

function App() {
  const [winners, setWinners] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

      const names = jsonData.flat().filter((name) => typeof name === "string");
      const selectedWinners = names.sort(() => 0.5 - Math.random()).slice(0, 3);

      setWinners(selectedWinners);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="App">
      <h1>Upload an Excel File</h1>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <h2>Selected Winners</h2>
      <ul>
        {winners.map((winner, index) => (
          <li key={index}>{winner}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
