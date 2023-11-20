import { useState } from 'react'
import './App.css'
import Checkbox from './components/Checkbox'

function App() {
  const [services,setServices] = useState( {
    Seo: false,
    Ads: false,
    Web: false,
  });
  const handleServiceChange = (service) => {
    setServices({ ...services, [service]: !services[service] });
  };

 

  return (
    
      <div className='bg-neutral-content'>
     
      <Checkbox  services={services} handleServiceChange={handleServiceChange}/>
      
    </div>
  );
  
}

export default App
