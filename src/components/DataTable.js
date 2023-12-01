// Will generate table for given data
import React from "react";

const DataTable = ({ data }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-4/6">
        <h2 className="text-4xl mb-4 text-blue-600 font-bold">Data Table</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post) => (
              <tr key={post.id} className="hover:bg-gray-200">
                <td className="py-2 px-4 border-b">{post.id}</td>
                <td className="py-2 px-4 border-b">{post.title}</td>
                <td className="py-2 px-4 border-b">{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
