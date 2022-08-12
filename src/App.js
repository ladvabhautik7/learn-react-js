import './App.css';
import Form from './components/Form';
import Greet from './components/Greet';
import Hello from './components/Hello';
import UseReducer from './components/UseReducer';
import { Welcome } from './components/Welcome';


function App() {
  return (
    <div className="App">
      <h1>Hello Word</h1>
      {/* <Greet /> */}
      <Welcome />
      <Hello />
      <UseReducer />
      <Form />
    </div>
  );
}

export default App;
