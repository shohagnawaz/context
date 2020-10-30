import logo from './logo.svg';
import './App.css';
import Son from './Components/Son';
import { DadaProvider } from './Components/Mycontext';

function App() {
  return (
    <div className="App">
      <DadaProvider value="Dada sent message to Puti">
        <Son></Son>
      </DadaProvider>
    </div>
  );
}

export default App;
