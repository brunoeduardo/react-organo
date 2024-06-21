import { useState } from "react"
import Button from "../Button"
import DropDownList from "../DropDownList"
import TextField from "../TextField"

const Form = (props) => {
    const teams = props.teams

    const onSave = (event) => {
        event.preventDefault()
    }

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    
    return (
        <section>
            <form onSubmit={onSave}>
                <h2>Fill in the form with the player's name, position and image</h2>
                <TextField label='Name' placeholder='Write name' mandatory={true} value={name} onChange={value => setName(value)}></TextField>
                <TextField label='Position' placeholder='Write position' value={position} onChange={value => setImage(value)}></TextField>
                <TextField label='Image' placeholder='Write image url' value={image} onChange={value => setPosition(value)}></TextField>
                <DropDownList teams={teams} mandatory={true} value={team} onChange={value => setTeam(value)}></DropDownList>
                <Button>Create</Button>
            </form>
        </section>
    )
}

export default Form