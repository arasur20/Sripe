import Select from "react-select";

const CountrySelect = ({ title, value, onChange, error, options }) => {
  return (
    <div className="mb-4">
      <label className="block text-left font-semibold text-[18px] text-gray-600 mb-2">
        {title}
      </label>
      <Select
        options={options}
        value={options.find((option) => option.value === value)}
        onChange={(selectedOption) => onChange(selectedOption.value)}
        placeholder="Select a country"
        className="shadow-md"
        styles={{
          control: (base, state) => ({
            ...base,
            padding: "6px",
            borderColor: state.isFocused ? "#3b82f6" : "#d1d5db",
            boxShadow: state.isFocused
              ? "0 0 0 4px rgba(59, 130, 246, 0.3)"
              : "none",
          }),
        }}
        isSearchable
      />
      {error && (
        <div className="text-start text-red-500 text-sm mt-1">{error}</div>
      )}
    </div>
  );
};

export default CountrySelect;
