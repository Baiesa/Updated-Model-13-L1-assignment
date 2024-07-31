import React from 'react';

const colors: string[] = ['Red', 'Green', 'Blue'];

const ColorList: React.FC = () => {
  return (
    <ul>
      {colors.map((color, index) => (
        <li key={index}>{color}</li>
      ))}
    </ul>
  );
};

export default ColorList;