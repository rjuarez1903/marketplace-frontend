import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="prompt_card">
      <div className="lg:hidden">
        <button
          className={`text-gray-700  rounded-lg w-full flex items-center justify-between  ${
            isDropdownOpen ? "rounded-b-lg" : "rounded-lg"
          }`}
          onClick={toggleDropdown}
        >
          <span className="text-lg font-semibold mb-2">Filtrar por:</span>
          <ExpandMore
            className={`ml-2 transition-transform transform ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-max-h duration-300 ease-in-out ${
            isDropdownOpen ? "max-h-100" : "max-h-0"
          }`}
        >
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
      </div>
      <div className="hidden lg:block">
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
    </div>
  );
};

export default FilterBar;
