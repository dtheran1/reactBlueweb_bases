import './App.css';
import Counter from './components/Counter';
import Lista from './components/Lista';
import Formulario from './components/Formulario';
import FormHook from './components/FormHook';
import EjemploUno from './components/EjemploUno';

function App() {
  return (
    <div className="App">
      <h1> Hola mundo con react </h1>
      <Counter />
      <Lista />
      <Formulario />
      <FormHook />
      <EjemploUno />
    </div>
  );
}

export default App;
