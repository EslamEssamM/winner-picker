import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';
// Read the Excel file
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const workbook = XLSX.readFile(path.join(__dirname, 'data.xlsx'));

// Get the first worksheet
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// Convert to JSON
const jsonData = XLSX.utils.sheet_to_json(worksheet, {defval:""});

// Save to data.json
fs.writeFileSync('data.json', JSON.stringify(jsonData, null, 2), 'utf-8');