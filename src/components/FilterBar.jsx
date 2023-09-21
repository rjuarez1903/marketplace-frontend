import { useState } from "react";
import RadioFilter from "./RadioFilter";

const FilterBar = ({ onFilterChange }) => {
    const [filter, setFilter] = useState({
      category: "Todos",
      classType: "Todos",
      frequency: "Todos",
    });
  
    const handleFilterChange = (filterType, value) => {
      const updatedFilter = { ...filter, [filterType]: value };
      setFilter(updatedFilter);
      onFilterChange(updatedFilter);
    };
  
    const categories = [
      { value: "Todos", label: "Todos" },
      { value: "Front end", label: "Front End" },
      { value: "Back end", label: "Back End" },
      { value: "Dev ops", label: "Dev Ops" },
      { value: "Data science", label: "Data Science" },
    ];
  
    const classTypes = [
      { value: "Todos", label: "Todos" },
      { value: "individual", label: "Individual" },
      { value: "group", label: "Grupal" },
    ];
  
    const frequencies = [
      { value: "Todos", label: "Todos" },
      { value: "unique", label: "Única" },
      { value: "weekly", label: "Semanal" },
      { value: "monthly", label: "Mensual" },
    ];
  
    return (
      <div className="p-4 prompt_card">
        <h2 className="text-lg font-semibold mb-2">Filtrar por:</h2>
        <RadioFilter
          name="category"
          options={categories}
          selected={filter.category}
          onChange={handleFilterChange}
        />
        <RadioFilter
          name="classType"
          options={classTypes}
          selected={filter.classType}
          onChange={handleFilterChange}
        />
        <RadioFilter
          name="frequency"
          options={frequencies}
          selected={filter.frequency}
          onChange={handleFilterChange}
        />
      </div>
    );
  };
  
  export default FilterBar;