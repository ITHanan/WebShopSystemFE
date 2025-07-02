import { Outlet } from 'react-router-dom';
import './App.css';
import './index.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { MenuProvider } from './context/MenuContext.jsx';


function App() {
  return (
    <MenuProvider> 
      <div className="layout">
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </MenuProvider>
  );
}

export default App;
