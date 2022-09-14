import logo from './logo.svg';
import './App.css';
import Validations from './components/Validations';

function App() {
  return (
    <div className="App">
      <Validations name ={""} age ={18}>
        <div>
          <h3>Hollo</h3>
        </div>
      </Validations>
    </div>
  );
}

export default App;
