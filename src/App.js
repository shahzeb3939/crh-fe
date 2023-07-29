import cv from './cv.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>You are visitor number 3939.</p>      
        <img src={cv} alt="cv" className="full-width-image" />
      </header>
    </div>
  );
}

export default App;
