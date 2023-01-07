import logo from "./logo.svg";
import "./App.css";
import SearchEngine from "./Weather";
function App() {
  return (
    <div className="App">
      <h1>My Weather App</h1>
      <SearchEngine />
      <br />
      <br />
      <br />
      <br />
      <p>
        This code is{" "}
        <a
          href="https://github.com/Bukilola/weather-react"
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
