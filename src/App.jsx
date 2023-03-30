import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World!!
        </a>
        <button>click me here</button>
        <button>click me here2 </button>
        <button>click me here3 </button>
        <button>click me here4 </button>
      </header>
    </div>
  );
}

export default App;
