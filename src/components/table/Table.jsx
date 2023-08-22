import React from "react";
import "./Table.css";

const Table = ({ thead, tbody }) => {
  return (
    <table className="w3-table-all">
      <thead>
        <tr>
          {thead.map((th, index) => (
            <th key={index}>{th.columnTitle}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tbody.map((point, index) => (
          <tr key={index}>
            {thead.map((th, index) => (
              <td key={index}>{point[th.columnName]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
