export default function ProductOption({ name, values, selectedOptions, setSelectedOptions }) {
    const selectedValue = selectedOptions.find(opt => opt.name === name)?.value || values[0];
  
    return (
      <div>
        <label htmlFor={name}>{name}</label>
        <select
          id={name}
          name={name}
          value={selectedValue}
          onChange={(e) => setSelectedOptions(e.target.value)}
        >
          {values.map((value, i) => (
            <option key={i} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    );
  }
  