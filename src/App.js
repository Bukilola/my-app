import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <br />
      <br />
      <br />
      <hr />
      <p>
        This code is{" "}
        <a
          href="https://github.com/shel-brya/reactweather"
          target="_blank"
          rel="noreferrer"
        >
          open-source
        </a>
        , created by{" "}
        <a
          href="https://www.linkedin.com/in/shelby-bryant-5aa5691b9/"
          target="_blank"
          rel="noreferrer"
        >
          Arasanyin Olubukola
        </a>{" "}
        🤠
      </p>
    </div>
  );
}
