import { useState } from "react"
import Button from "../Button"
import DropDownList from "../DropDownList"
import TextField from "../TextField"

const Form = ({teams, positions, setNewPlayer}) => {
    
    const onSave = (event) => {
        event.preventDefault()
        setNewPlayer({name, position, image, team});
        setName('')
        setPosition('')
        setImage('')
        setTeam('')
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
                <DropDownList label='Position' list={positions} mandatory={true} value={position} onChange={value => setPosition(value)}></DropDownList>
                <TextField label='Image' placeholder='Write image url' mandatory={true} value={image} onChange={value => setImage(value)}></TextField>
                <DropDownList label='Team' list={teams} mandatory={true} value={team} onChange={value => setTeam(value)}></DropDownList>
                <Button>Add</Button>
            </form>
        </section>
    )
}

export default Form