import Nav from './componentes/Nav';
import './App.css';
import Footer from './componentes/footer';
import Card from './componentes/cards';
import Presentacion from './componentes/presentacion';
function App() {
  return (
    <div className="App">
     <div className="container" style={{ padding: '0px', margin: '0px', maxWidth: '100%' }}>
        <Nav />
<Presentacion />
       <Card />
       <Footer />
      </div>
    </div>
  );
}

export default App;
