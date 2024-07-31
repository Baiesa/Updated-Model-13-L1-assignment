import React from 'react';

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: 'John Doe', age: 25 },
  { name: 'Jane Smith', age: 30 },
  { name: 'Alice Johnson', age: 35 },
];

const UserList: React.FC = () => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user.name} - {user.age} years old
        </li>
      ))}
    </ul>
  );
};

export default UserList;