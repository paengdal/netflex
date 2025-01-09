import React from 'react';
import Header from './_components/Header';

function Rootlayout({ children }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      {children}
    </div>
  );
}

export default Rootlayout;
