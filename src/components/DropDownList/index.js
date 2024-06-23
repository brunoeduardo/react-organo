const DropDownList = ({label, mandatory, list, onChange, value}) => {
  return (
    <div>
      <label>{label}</label>
      <select
        onChange={event => onChange(e => event.target.value)}
        required={mandatory}
        value={value}
      >
        <option value=''>Select {label}</option>
        {list.map(item => {
          return <option key={item} value={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default DropDownList
