import React from 'react';
import ColorList from './components/ColorList';
import EvenNumbers from './components/EvenNumbers';
import UserList from './components/UserList';

const greeting: string = "Hello, TypeScript!";
const numberList: number[] = [5, 10, 15];

const calculateSum = (a: number, b: number): number => {
  return a + b;
};

const App: React.FC = () => {
  return (
    <div>
      <h1>{greeting}</h1>
      <ul>
        {numberList.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <p>Sum of 5 and 10: {calculateSum(5, 10)}</p>
      <h2>Color List</h2>
      <ColorList />
      <h2>Even Numbers</h2>
      <EvenNumbers />
      <h2>User List</h2>
      <UserList />
    </div>
  );
};

export default App;