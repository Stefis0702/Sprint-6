import React from 'react';

const ServiceForm = ({ handleNumLanguagesChange, handleNumPagesChange, webOptions }) => {
 
  return (
    <div className="web-service-form">
      <div>
        <label htmlFor="numPages">Número de Páginas:  </label>
        <button className="btn btn-circle btn-outline w-6 btn-xs btn-secondary " onClick={() =>webOptions.pages > 1? handleNumPagesChange(webOptions.pages - 1):null}>-</button>
        <input
          type="text"
          id="numPages"
          value={webOptions.pages}
          onChange={(e) => handleNumPagesChange(Number(e.target.value,10))}
          min={1}
          inputMode="none"
          pattern="^\d*"
          className=" input input-bordered input-xs w-16 px-2 mx-2 text-center font-bold "
        />
        <button className="btn btn-circle btn-outline btn-xs btn-secondary" onClick={() => handleNumPagesChange(webOptions.pages + 1)}>+</button>
      </div>
      <div>
        <label htmlFor="numLanguages">Número de Idiomas:  </label>
        <button className="btn btn-circle btn-outline btn-xs btn-secondary" onClick={() =>webOptions.languages > 1?handleNumLanguagesChange(webOptions.languages - 1):null}>-</button>
        <input
          type="text"
          id="numLanguages"
          value={webOptions.languages}
          onChange={(e) => handleNumLanguagesChange(Number(e.target.value,10))}
          min={1}
          inputMode="none"
          pattern="^\d*"
          className="input input-bordered input-xs w-16 px-2 mx-2 text-center font-bold"
        />
        <button className="btn btn-circle btn-outline btn-xs btn-secondary" onClick={() => handleNumLanguagesChange(webOptions.languages + 1)}>+</button>
      </div>
    </div>
  );
};

export default ServiceForm;