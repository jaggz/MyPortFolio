import {Outlet } from 'react-router-dom';// import Outlet from Router Dom 
import Header from './components/Header';// import Header Component
import Footer from './components/Footer';// import Footer Component

function App() {
  return (
    <>
        <Header />
        {/* Fill in the appropriate component so that the user will conditionally see the appropriate view based on the URL */}
        <main className="mx-12 container">
          <Outlet />
        </main>
          <Footer />
    </>
  );
}

export default App
