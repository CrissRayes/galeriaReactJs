import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';

function App () {
  return (
    <div>
      <Header
        title="Galería de Imágenes con React"
      />
      <div className='d-flex justify-content-around mb-5'>
        <Card
          src='https://picsum.photos/id/14/200/200'
          title='Playa'
          description='Fotografía de paisaje hecha por Paul Jarvis'
        />
        <Card
          src='https://picsum.photos/id/17/200/200'
          title='Paisaje Rural'
          description='Fotografía de paisaje rural hecha por Paul Jarvis'
        />
        <Card
          src='https://picsum.photos/id/24/200/200'
          title='Libro'
          description='Fotografía de libro hecha por Alejandro Escamilla'
        />
      </div>
      <Footer
        description='Todos los derechos reservados'
      />
    </div>
  );
}

export default App;
