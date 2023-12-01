import React, { useState, useEffect } from "react";
import { fetchData } from "../services/api";
import { filterData, generatePieChartData } from "../services/dataManipulation";
import DataTable from "./DataTable";
import PieChart from "./PieCharts";

const Data = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        // calls function to get data from api
        const data = await fetchData(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromAPI();
  }, []);

  // Will retrieve data of user id 1 from total data
  const filteredData = filterData(posts, 1);

  // Will create a piechart of given data
  const pieChartData = generatePieChartData(posts, 1);

  return (
    <div>
      <DataTable data={filteredData} />
      <PieChart data={pieChartData} />
    </div>
  );
};

export default Data;
