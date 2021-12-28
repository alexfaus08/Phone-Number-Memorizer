import logo from './logo.svg';
import './App.css';
import PhoneNumberInput from './components/PhoneNumberInput';

function App() {
  return (
    <div className="App">
        <div class="container">
          <h2 class="">
              Enter a Phone Number
          </h2> 
          <PhoneNumberInput />
        </div>
    </div>
  );
}

export default App;
