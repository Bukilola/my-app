import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <Weather defaultcity="New York" />
        <footer>
          {" "}
          This code is created by Arasanyin Olubukola 🤠 and it is{" "}
          <a
            href="https://github.com/Bukilola/my-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced.
          </a>
        </footer>
      </div>
    </div>
  );
}