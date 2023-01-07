
import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <h1>My Weather App</h1>
      <Weather />
      <br />
      <br />
      <br />
      <br />
      <p>
        This code is{" "}
        <a
          href="https://github.com/Bukilola/my-app"
          target="-blank"
          rel="noreferrer"
        >
          Open-source
        </a>
        , created by Arasanyin Olubukola
      </p>
    </div>
  );
}

export default App;
