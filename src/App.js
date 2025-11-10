import React from 'react';
import Header from './components/Header';
import StatusSection from './components/StatusSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <StatusSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;