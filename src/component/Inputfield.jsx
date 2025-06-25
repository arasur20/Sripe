const InputField = ({ type, placeholder,title, value, onChange, error }) => {
    return (
    <div className="mb-4">
        <label className="block text-left font-semibold text-[18px] text-gray-600 mb-2">{title}</label>
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:ring-4 focus:ring-blue-300"
        />
        {error && (
        <div className="text-start text-red-500 text-sm mt-1">{error}</div>
      )}
    </div>
    );
}
export default InputField;