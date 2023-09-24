const RadioFilter = ({ name, options, selected, onChange }) => {
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h3>
      <div className="flex flex-wrap -mx-2">
        {options.map((option) => (
          <div className="mb-2 px-2 w-1/2 w-auto" key={option.value}>
            <label
              className={`inline-flex items-center px-4 py-2 rounded-lg ${
                selected === option.value
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } cursor-pointer`}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={selected === option.value}
                onChange={() => onChange(name, option.value)}
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
