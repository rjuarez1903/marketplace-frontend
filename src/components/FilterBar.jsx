import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import RadioFilter from "./RadioFilter";

const FilterBar = ({ onFilterChange, onSortChange }) => {
  const [filter, setFilter] = useState({
    classType: "Todas",
    frequency: "Todas",
  });

  const [sortOrder, setSortOrder] = useState("desc"); // Nuevo estado para el ordenamiento (descendente por defecto)

  const handleFilterChange = (filterType, value) => {
    const updatedFilter = { ...filter, [filterType]: value };
    setFilter(updatedFilter);
    onFilterChange(updatedFilter);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
    onSortChange(order);
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

  const orders = [
    { value: "desc", label: "Mayor calificación" },
    { value: "asc", label: "Menor calificación" },
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
          <span className="text-lg font-semibold mb-2">Filtros</span>
          <ExpandMore
            className={`ml-2 transition-transform transform ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isDropdownOpen ? "max-h-96" : "max-h-0"
          }`}
          >
          <RadioFilter
            name="classType"
            options={classTypes}
            selected={filter.classType}
            onFilterChange={handleFilterChange}
          />
          <RadioFilter
            name="frequency"
            options={frequencies}
            selected={filter.frequency}
            onFilterChange={handleFilterChange}
          />
          <RadioFilter
            name="sortOrder"
            options={[
              { value: "desc", label: "Mayor calificación" },
              { value: "asc", label: "Menor calificación" },
            ]}
            selected={sortOrder}
            onSortChange={handleSortChange} 
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <h2 className="text-lg font-semibold mb-2">Filtros</h2>
        <RadioFilter
          name="classType"
          options={classTypes}
          selected={filter.classType}
          onFilterChange={handleFilterChange}
        />
        <RadioFilter
          name="frequency"
          options={frequencies}
          selected={filter.frequency}
          onFilterChange={handleFilterChange}
        />
        <RadioFilter
          name="sortOrder"
          options={orders}
          selected={sortOrder}
          onSortChange={handleSortChange} 
        />
      </div>
    </div>
  );
};

export default FilterBar;
