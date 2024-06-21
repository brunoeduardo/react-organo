
const TextField = (props) => {


    return (
        <div>
            <label>{props.label}</label>
            <input onChange={event => props.onChange(event.target.value)} required={props.mandatory} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField