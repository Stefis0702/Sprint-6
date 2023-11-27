import './App.css';
import React, { useState } from 'react';
import Checkbox from './components/Checkbox';
import ServiceForm from './components/ServiceForm';
import { Link } from "react-router-dom"


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
    <div><div className="navbar bg-base-100">
    <div className="flex-1">
    <div className="diff diff w-60 h-12"> 
    <div className="diff-item-1">
      <div className="bg-primary text-primary-content text-2xl font-black grid place-content-center">UTILIDADES WEB</div> 
    </div>
    <div className="diff-item-2">
      <div className="bg-base-200 text-2xl font-black grid place-content-center">UTILIDADES WEB</div>
    </div>
    <div className="diff-resizer"></div>
  </div>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><Link to={"/"} className="font-bold">Home</Link></li>
        
      </ul>
    </div>
  </div>
      <Checkbox services={services} handleServiceChange={handleServiceChange} />
     
    </div>
  );
}

export default App;