/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable arrow-body-style */
/* eslint-disable keyword-spacing */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import createPixels from '../functions/pixelCreator';

export default function ColorGenerator() {
  const [grid, setGrid] = useState(0);
  useEffect(() => {
    const tempGrid = createPixels();
    setGrid(tempGrid);
    console.log(tempGrid);
  }, []);

  if(!grid.length) return <>Loading...</>;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(256, 5px)' }}>
      {grid.map((rows, i) => rows.map((cols, j) => (
        <div
          className="cells"
          key={`${i}-${j}`}
          style={{
                        width: '5px',
                        height: '5px',
                        background: cols,
                     }}
        />
               )))}

    </div>
  );
}
