import {Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Header />
        {/* Fill in the appropriate component so that the user will conditionally see the appropriate view based on the URL */}
        <main className="mx-12 container">
          <Outlet />
          <Footer />
        </main>
    </>
  );
}

export default App
