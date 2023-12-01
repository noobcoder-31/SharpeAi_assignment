// Uses recharts package to generate pieChart for given data

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#4CAF50", "#2196F3", "#FFC107", "#FF5252"];

const CustomPieChart = ({ data }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white  rounded-lg shadow-md text-center w-4/6">
        <h2 className="text-4xl mt-10 text-blue-600 font-bold">Pie Chart</h2>
        <ResponsiveContainer width="100%" height={500}>
          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <h3 className="text-lg font-semibold">Legend</h3>
        <div className="ml-80">
          <ul className="list-none p-0 m-0">
            {data.map((entry, index) => (
              <li key={`legend-${index}`} className="flex items-center mb-2">
                <div
                  className="w-4 h-4 mr-2"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <span>{index === 0 ? `User ID ${1}` : "All Other Users"}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomPieChart;
