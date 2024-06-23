
const TextField = ({label, onChange, mandatory,placeholder, value}) => {


    return (
        <div>
            <label>{label}</label>
            <input onChange={event => onChange(event.target.value)} required={mandatory} placeholder={placeholder} value={value}/>
        </div>
    )
}

export default TextField