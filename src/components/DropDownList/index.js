const DropDownList = (props) => {
    return(
        <div>
            <label>{props.label}</label>
            <select onChange={event => props.onChange(event.target.value)} required={props.mandatory}>
                {props.teams.map(item => {
                    return <option key={item} >{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDownList