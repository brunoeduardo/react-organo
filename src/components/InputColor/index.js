import './InputColor.css'

const InputColor = ({label, onChange, value}) => {
    return(
        <div className="input-color-container">
             
            {label &&
                <label className="input-color-label">{label}</label> 
            }
            <input type="color" className="input-color-field" value={value} onChange={event => onChange(event.target.value)}></input>
        </div>
    )
}

export default InputColor;