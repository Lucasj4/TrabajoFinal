import React from "react";
import "./MultipleSelect.css";
import AsyncSelect from "react-select/async";

const MultipleSelect = ({ options }) => {
  const handleChange = (selectedOptions) => {
    console.log("Selected options:", selectedOptions);
  };

  const loadOptions = (searchValue, callback) => {
    setTimeout(() => {
      // Filtra las opciones según el valor de búsqueda
      const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      );
      callback(filteredOptions);
    }, 2000);
  };

  return (
    <AsyncSelect
      loadOptions={loadOptions}
      defaultOptions
      isMulti
      className="custom-select"
      onChange={handleChange}
    />
  );
};

export default MultipleSelect;

