import React, { useState, useEffect } from 'react';

const ServiceForm = ({ handleTotalCost }) => {
  const [numPages, setNumPages] = useState(1);
  const [numLanguages, setNumLanguages] = useState(1);

  useEffect(() => {
    handleTotalCost((numPages + numLanguages) * 30);
  }, [numPages, numLanguages, handleTotalCost]);

  const handleNumPagesChange = (event) => {
  const input = event.target.value.replace(/\D/, ''); 
  input = input === '' ? '1' : input;
  setNumPages(input);
};

  const handleNumLanguagesChange = (event) => {
    const input = event.target.value.replace(/\D/, ''); 
    input = input === '' ? '1' : input;
    setNumLanguages(input);
  };

  const increasePages = () => {
    setNumPages(numPages + 1);
  };

  const decreasePages = () => {
    if (numPages > 1) {
      setNumPages(numPages - 1);
    }
  };

  const increaseLanguages = () => {
    setNumLanguages(numLanguages + 1);
  };

  const decreaseLanguages = () => {
    if (numLanguages > 1) {
      setNumLanguages(numLanguages - 1);
    }
  };

  return (
    <div className="web-service-form">
      <div>
        <label htmlFor="numPages">Número de Páginas:  </label>
        <button className="btn btn-circle btn-outline w-6 btn-xs btn-secondary " onClick={decreasePages}>-</button>
        <input
          type="text"
          id="numPages"
          value={numPages}
          onChange={handleNumPagesChange}
          min={1}
          inputMode="none"
          pattern="^\d*"
          className=" input input-bordered input-xs w-16 px-2 mx-2 text-center font-bold "
        />
        <button className="btn btn-circle btn-outline btn-xs btn-secondary" onClick={increasePages}>+</button>
      </div>
      <div>
        <label htmlFor="numLanguages">Número de Idiomas:  </label>
        <button className="btn btn-circle btn-outline btn-xs btn-secondary" onClick={decreaseLanguages}>-</button>
        <input
          type="text"
          id="numLanguages"
          value={numLanguages}
          onChange={handleNumLanguagesChange}
          min={1}
          inputMode="none"
          pattern="^\d*"
          className="input input-bordered input-xs w-16 px-2 mx-2 text-center font-bold"
        />
        <button className="btn btn-circle btn-outline btn-xs btn-secondary" onClick={increaseLanguages}>+</button>
      </div>
    </div>
  );
};

export default ServiceForm;