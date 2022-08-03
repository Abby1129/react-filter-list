import "./App.css";
import { Users } from "users.js";

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Search..." className="search" />
      <ul>
        {Users.map((user) => (
          <li className="listItem">{user.firstname}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
