import React, { useState, useEffect } from 'react';

const ServiceForm = ({ handleTotalCost }) => {
  const [numPages, setNumPages] = useState(1);
  const [numLanguages, setNumLanguages] = useState(1);

  useEffect(() => {
    handleTotalCost((numPages + numLanguages) * 30);
  }, [numPages, numLanguages, handleTotalCost]);

  const handleNumPagesChange = (event) => {
    const pages = parseInt(event.target.value,10);
    setNumPages(pages);

    
  };

  const handleNumLanguagesChange = (event) => {
    const languages = parseInt(event.target.value,10);
    setNumLanguages(languages);
  };

  return (
    <div className="web-service-form">
      <div>
        <label htmlFor="numPages">Número de Páginas:</label>
        <input
          type="number"
          id="numPages"
          value={numPages}
          onChange={handleNumPagesChange}
          min={1}
        />
      </div>
      <div>
        <label htmlFor="numLanguages">Número de Idiomas:</label>
        <input
          type="number"
          id="numLanguages"
          value={numLanguages}
          onChange={handleNumLanguagesChange}
          min={1}
        />
      </div>
    </div>
  );
};

export default ServiceForm;