import "./style.css";
import React, { useState } from "react";

function App() {
  const [users, setUser] = useState([]);

  const loadUsers = async () => {
    console.log("before");
    const response = await fetch("https://api.github.com/users");
    const jsonresponse = await response.json();
    setUser(jsonresponse);
  };

  return (
    <>
      <div className="head">
        <h1>User Card</h1>
        <button onClick={loadUsers}>Get Data</button>
      </div>

      <div className="data">
        <h2>Users:</h2>
        <ul>
          {users.map(({ id, login, node_id }) => (
            <li key={id}>
              Name: {login}
              <div>Node Id:{node_id}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
