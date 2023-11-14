const InputField = ({ label, id, name, type, formik }) => {
  const showError = formik.touched[name] && formik.errors[name];

  return (
    <div>
      {label && (
        <label htmlFor={id} className="font-inter text-sm text-gray-600">
          {label}:
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={formik.values[name]}
        onChange={(e) => {
          formik.handleChange(e);
          formik.setStatus(null);
        }}
        onBlur={formik.handleBlur}
        className={`border ${
          showError ? "border-red-500" : "border-gray-300"
        } rounded p-2 w-full`}
      />
      {showError && (
        <div className="text-red-500 text-xs">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default InputField;
