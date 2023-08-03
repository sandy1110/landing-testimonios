import logo from './logo.svg';
import './App.css';
import { Testimonio } from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1> Esto es lo que dicen nuestros clientes sobre nosotros</h1>
        <Testimonio 
          nombre='Sandra'
          pais='Suecia'
          imagen='sandy'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Ingeniera de Software Ingeniera de Software Ingeniera de Software Ingeniera de Software Ingeniera de Software Ingeniera de Software Ingeniera de Software Ingeniera de Software Ingeniera de SoftwareIngeniera de Software'
        />
        <Testimonio 
          nombre='Iguano'
          pais='Mexico'
          imagen='pug'
          cargo='Ingeniero de Software'
          empresa='Youtube'
          testimonio='Ingeniera de Software Ingeniera de Software Ingeniera de Software Ingeniera de Software Ingeniera de Software Ingeniera de Software Ingeniera de Software Ingeniera de Software Ingeniera de SoftwareIngeniera de Software'
        />
      </div>
    </div>
  );
}

export default App;
