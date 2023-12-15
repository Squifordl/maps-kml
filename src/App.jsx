import React from 'react';
import './App.css';
import MapComponent from './pages/Map';
import DiscontinuedPopup from './pages/Pop';

function App() {
  return (
    <div className="App">
      <MapComponent />
      <DiscontinuedPopup />
    </div>
  );
}

export default App;
