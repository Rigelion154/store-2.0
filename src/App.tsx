import React from 'react';
import AppRouter from './routes/appRouter/AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
