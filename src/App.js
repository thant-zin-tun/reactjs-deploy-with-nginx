import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, My name is Thant Zin Tun. I am React Js Developer. I love HEH
        </p>
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Testing Deploy React Js Project with Nginx
        </a>
      </header>
    </div>
  );
}

export default App;
