import {useState} from 'react'

const User = () => {
  const[count] =useState(0)
  return (
    <div className="user-card">
      <h1>Count= {count}</h1>
      <h2>Name: sree</h2>
      <h3>Location: chennai</h3>
      <h4>Contact: @sree30</h4>
    </div>
  );
};
export default User;
