import './App.css';
import React, { useState } from 'react';
import Checkbox from './components/Checkbox';
import ServiceForm from './components/ServiceForm';

function App() {
  const [services, setServices] = useState({
    Seo: false,
    Ads: false,
    Web: false,
  });

  const handleServiceChange = (service) => {
    setServices({ ...services, [service]: !services[service] });
  };



  return (
    <div>
      <Checkbox services={services} handleServiceChange={handleServiceChange} />
     
    </div>
  );
}

export default App;