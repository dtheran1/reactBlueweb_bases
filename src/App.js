import './App.css';
import Counter from './components/Counter';
import Lista from './components/Lista';
import Formulario from './components/Formulario';
import FormHook from './components/FormHook';
import EjemploUno from './components/EjemploUno';
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';

function App() {
  const sujeto = {
    name: 'Daniel',
    urlImage: 'https://via.placeholder.com/64',
    text: 'lorem lorem lorem lorem lorem lorem'
  }

  return (
    <div className="App">
      <h1> Hola mundo con react </h1>
      <Counter />
      <Lista />
      <Formulario />
      <FormHook />
      <EjemploUno />
      <Saludo nombre='Daniel' />
      <Saludo nombre='Ronny' />
      <Comentario sujeto={sujeto} />
    </div>
  );
}

export default App;
