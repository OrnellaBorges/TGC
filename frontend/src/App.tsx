import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to front</h1>
        <Counter />
      </header>
    </>
  );
}
export default App;
