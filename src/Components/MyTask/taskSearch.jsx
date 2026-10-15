import React, {useState} from 'react'

const taskSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full max-w-md mt-3">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
};

export default taskSearch