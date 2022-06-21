import { Routes, Route, Link } from 'react-router-dom';
import styles from '../src/App.module.scss';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from "./Components/Home";
import Products from './Components/Products';

function App() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <img src="https://barbearia-alura00.netlify.app/logo.png" alt="" />
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/product'>Produtos</Link></li>
              <li><Link to='/contact'>Contato</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
