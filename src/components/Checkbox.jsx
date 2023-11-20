import React from "react";

const MyForm = ({ services, handleServiceChange }) => {
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

  const totalBudget = initialServices.reduce(
    (acc, service) => acc + (services[service.name] ? service.cost : 0),
    0
  );

  return (
    <div className=" bg-base-100">
      <div className="container w-2/5 mx-auto">
        {initialServices.map((service, index) => (
          <div
            key={index}
            className="card bordered-lg border-blue-500 border-solid border-2 bg-blue-200 text-accent-content mb-4 "
          >
            <div className="card-body">
              <h2 className="card-title font-bold">{service.name}</h2>
              <p>{service.descripcion}</p>
              
              <div className="card-actions justify-end">
              <h2 className="font-bold text-left text-xl">{service.cost} €</h2>
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
            </div>
          </div>
        ))}
        <div className="w-106  text-accent-content mb-5">
          <p className="text-right text-xl">Preu pressuposat: {totalBudget} €</p>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
