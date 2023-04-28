// import logo from './logo.svg';
import './App.css';
import theCalculator from './components/calculator';
import Quotes from './components/quotes';

function App() {
  return (
    <>
      {theCalculator()}
      {Quotes()}
    </>
  );
}

export default App;
