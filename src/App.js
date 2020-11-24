import './App.css';
import Login from './Component/Login/Login'
import Clock from './Component/Clock/Clock';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Clock/>
        <Login/>
      </header> 
    </div>
  );
}

export default App;
