import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers () {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>External Users:</h3>
      {
        users.map(user => <User name={user.name} phone={user.phone} email={user.email}></User>)
      }
    </div>
  )
}

function User (props) {
  return (
    <div style={{border: "1px solid gray", backgroundColor: "skyblue", marginTop: "10px"}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
