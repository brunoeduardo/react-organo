import "./InputField.css"

const InputField = ({type = 'text', label, onChange, mandatory,placeholder, value}) => {
    return (
        <div className="input-field-container">
            {label &&
                <label className="input-field-label">{label}</label> 
            }
            <input type={type} className={`input-field-type-${type}`} onChange={event => onChange(event.target.value)} required={mandatory} placeholder={placeholder} value={value}/>
        </div>
    )
}

export default InputField