import React, { useState, useEffect } from 'react';
import createPixels from '../functions/pixelCreator';

export default function ColorGenerator() {
  const [grid, setGrid] = useState(0);
  useEffect(() => {
    const tempGrid = createPixels();
    setGrid(tempGrid);
  }, []);

  if (!grid.length) return <>Loading...</>;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(256, 5px)' }}>
      {grid.map((rows, i) => rows.map((cols, j) => (
        <div
          className="cells"
          // eslint-disable-next-line react/no-array-index-key
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
