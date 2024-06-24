import "./TextField.css"

const TextField = ({label, onChange, mandatory,placeholder, value}) => {
    return (
        <div className="text-field-container">
            <label className="text-field-label">{label}</label>
            <input className="text-field-input" onChange={event => onChange(event.target.value)} required={mandatory} placeholder={placeholder} value={value}/>
        </div>
    )
}

export default TextField