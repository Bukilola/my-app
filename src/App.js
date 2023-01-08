
import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
       <Weather defaultcity="Hezogenaurach" />
        <footer>
          {" "}
          created by Arasanyin Olubukola and it is{" "}
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
   
  );
}
export default App;