import React, { useState} from "react";
import ServiceForm from "./ServiceForm";
import TodoList from "./TodoList";
import Todo from "./Todo";

const MyForm = ({ services, handleServiceChange, }) => {
  const initialServices = [
    {
      name: "Seo",
      descripcion: "Programación de una web responsive completa",
      cost: 300,
    },
    {
      name: "Ads",
      descripcion: "Programación de una web responsive completa",
      cost: 400,
    },
    {
      name: "Web",
      descripcion: "Programación de una web responsive completa",
      cost: 500,
    },
  ];

  const [webOptions, setWebOptions] = useState({pages: 1, languages: 1}); 
 

  const calculateTotalCost = () => {
    let total = 0;
  
    initialServices.forEach(service => {
      if (services[service.name]) {
        total += service.cost;
      }
    });
  
    if (services.Web) { 
      total += (webOptions.pages + webOptions.languages) * 30;
    }
  
    return total;
  };

  const onPagesChange = (pages) => {
    setWebOptions({...webOptions, pages});
  };
  const onLanguagesChange = (languages) => {
    setWebOptions({...webOptions, languages});
  };
 
  
 
  
  return (
    
    <div className="bg-base-100">
      
      <div className="container w-2/5 mx-auto">
        {initialServices.map((service, index) => (
          <div
            key={index}
            className="card bordered-lg border-blue-500 border-solid border-2 bg-blue-200 text-accent-content mb-4"
          >
            <div className="card-body">
              <h2 className="card-title">{service.name}</h2>
              <p>{service.descripcion}</p>

              <div className="card-actions justify-end">
                <h2 className="font-bold text-left text-xl">
                  {service.cost} €
                </h2>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      checked={services[service.name]}
                      onChange={() => handleServiceChange(service.name)}
                      className="checkbox checkbox-secondary"
                    />
                    <span className="label-text-accent-content w-2/5">
                      {" "}
                      Afegir
                    </span>
                  </label>
                </div>
              </div>
              {services.Web && service.name === "Web" && (
                <div className="flex justify-end mt-4">
                  <div className="card bordered-lg border-blue-500  text-accent-content">
                    <div className="card-body">
                      <ServiceForm   webOptions={webOptions} handleTotalCost={calculateTotalCost()}  handleNumLanguagesChange={onLanguagesChange} handleNumPagesChange={onPagesChange}/>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="w-106  text-accent-content mb-5">
          <p className="text-right text-xl">
            Preu pressuposat: {calculateTotalCost()} €
          </p>
        </div>
        <div className="card bordered-lg border-blue-500 border-solid border-2 bg-blue-200 text-accent-content mb-4">
      <div className="card-body">
      <TodoList  setWebOptions={setWebOptions} arrayinitialServices={initialServices} services={services} totalCost={calculateTotalCost} webOptions={webOptions} handleNumPagesChange={onPagesChange} handleNumLanguagesChange={onLanguagesChange} />
      </div>
      
    </div>
      </div>
            
    </div>
  );
};

export default MyForm;
