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
          src='https://picsum.photos/200/300'
          title='Imagen 1'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        />
        <Card
          src='https://picsum.photos/200/300'
          title='Imagen 2'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        />
        <Card
          src='https://picsum.photos/200/300'
          title='Imagen 3'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        />
      </div>
      <Footer
        description='Todos los derechos reservados'
      />
    </div>
  );
}

export default App;
