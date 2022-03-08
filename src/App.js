import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import UseReducer from './components/UseReducer';
import { Welcome } from './components/Welcome';


function App() {
  return (
    <div className="App">
      <h1>Hello Word</h1>
      <Greet />
      <Welcome />
      <Hello />
      <UseReducer />
    </div>
  );
}

export default App;
