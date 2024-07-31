import React from 'react';

const filterNumbers = (numbers: number[]): number[] => {
  return numbers.filter(number => number % 2 === 0);
};

const numberList: number[] = [5, 10, 15, 20, 25];

const EvenNumbers: React.FC = () => {
  const evenNumbers = filterNumbers(numberList);

  return (
    <ul>
      {evenNumbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
};

export default EvenNumbers;