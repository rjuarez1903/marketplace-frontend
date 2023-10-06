import { translateOption } from "../utils/translateOption";

const RadioFilter = ({ name, options, selected, onFilterChange, onSortChange }) => {
  const handleFilterOptionChange = (value) => {
    onFilterChange(name, value); // Llama a la función onFilterChange con el nombre y el valor seleccionado
  };

  const handleSortOptionChange = (value) => {
    onSortChange(value); // Llama a la función onSortChange con el valor seleccionado
  };

  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">
        {translateOption(name).charAt(0).toUpperCase() + translateOption(name).slice(1)}
      </h3>
      <div className="flex flex-wrap -mx-2">
        {options.map((option) => (
          <div className="mb-2 px-2 w-1/2 w-auto" key={option.value}>
            <label
              className={`inline-flex items-center px-4 py-2 rounded-lg ${
                selected === option.value
                  ? "bg-primary-orange text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } cursor-pointer`}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={selected === option.value}
                onChange={() => {
                  if (name === "sortOrder") {
                    handleSortOptionChange(option.value); // Si es un cambio de orden, llama a handleSortOptionChange
                  } else {
                    handleFilterOptionChange(option.value); // Si es un cambio de filtro, llama a handleFilterOptionChange
                  }
                }}
                className="sr-only"
              />
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioFilter;
