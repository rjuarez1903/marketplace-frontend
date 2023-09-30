import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import RadioFilter from "./RadioFilter";

const FilterBar = ({ onFilterChange }) => {
  const [filter, setFilter] = useState({
    classType: "Todas",
    frequency: "Todas",
  });

  const handleFilterChange = (filterType, value) => {
    const updatedFilter = { ...filter, [filterType]: value };
    setFilter(updatedFilter);
    onFilterChange(updatedFilter);
  };

  const classTypes = [
    { value: "Todas", label: "Todas" },
    { value: "individual", label: "Individual" },
    { value: "group", label: "Grupal" },
  ];

  const frequencies = [
    { value: "Todas", label: "Todas" },
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
