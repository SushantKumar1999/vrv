import React from "react";

const Table = ({ headers, rows, renderRowActions }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
          {renderRowActions && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, idx) => (
              <td key={idx}>{value}</td>
            ))}
            {renderRowActions && (
              <td>{renderRowActions(row)}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
