import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Link } from "react-router-dom";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const Statistics = ({ data }) => {
  if (!Array.isArray(data)) {
    return <div>Error: Data is not an array</div>;
  }

  const roadCounts = data.reduce((acc, item) => {
    if (item && typeof item.path === "string") {
      acc[item.path] = (acc[item.path] || 0) + 1;
    }
    return acc;
  }, {});

  const centerCounts = data.reduce((acc, item) => {
    if (item && typeof item.section === "string") {
      acc[item.section] = (acc[item.section] || 0) + 1;
    }
    return acc;
  }, {});

  const roadData = Object.keys(roadCounts).map((key) => ({
    name: key,
    value: roadCounts[key],
  }));
  const centerData = Object.keys(centerCounts).map((key) => ({
    name: key,
    value: centerCounts[key],
  }));

  return (
    <div className="p-4 bg-[#f0ebe5] rounded shadow-lg md:w-3/4 mx-auto flex flex-row flex-wrap justify-center md:justify-between sm:flex-col">
      <div className="chart-container mb-8 bg-white p-4 rounded shadow flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={roadData}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {roadData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div className="chart-container mb-8 bg-white p-4 rounded shadow flex justify-center">
        <BarChart
          width={500}
          height={300}
          data={centerData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
      <div className="flex justify-center">
        <Link to="/winners">
          <button className="bg-accent text-white py-2 px-4 rounded hover:bg-green-700">
            اختيار الفائزين
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Statistics;
