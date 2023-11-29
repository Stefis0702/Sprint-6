import React, { useState } from "react";

function TodoForm(props) {
  const [clientName, setClientName] = useState("");
  const [telefonName, setTelefonName] = useState("");
  const [emailName, setEmailName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      name: clientName,
      phone: telefonName,
      email: emailName,
    });
    setClientName("");
    setTelefonName("");
    setEmailName("");
  };

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
  <div className="flex gap-2">
    <input
      type="text"
      placeholder="Nombre del Cliente"
      className="input input-bordered w-full md:w-1/3"
      value={clientName}
      onChange={(e) => handleChange(e, setClientName)}
    />
    <input
      type="text"
      placeholder="Teléfono"
      className="input input-bordered w-full md:w-1/3"
      value={telefonName}
      onChange={(e) => handleChange(e, setTelefonName)}
    />
    <input
      type="text"
      placeholder="Email"
      className="input input-bordered w-full md:w-1/3"
      value={emailName}
      onChange={(e) => handleChange(e, setEmailName)}
    />
    <button className="btn btn-secondary px-2 py-1 text-sm" type="submit">
      Solicitar presupuesto
    </button>
  </div>
</form>
  );
}

export default TodoForm;