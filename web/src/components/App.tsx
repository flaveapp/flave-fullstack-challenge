import './App.css';

const App = (): JSX.Element => {
  const text = "Hello world";
  return (
    <div className="App">
      <header className="App-header">
        <p> {text} </p>
      </header>
    </div>
  );
};

export default App;
