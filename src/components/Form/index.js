import { useState } from "react"
import "./Form.css"
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
        <section className="player-form-container">
            <form onSubmit={onSave} className="player-form-content">
                <h2 className="player-form-title">Fill in the form with the player's name, position and image</h2>
                <div className="player-form-column">
                    <TextField label='Name' placeholder='Write name' mandatory={true} value={name} onChange={value => setName(value)}></TextField>
                    <DropDownList label='Position' list={positions} mandatory={true} value={position} onChange={value => setPosition(value)}></DropDownList>
                </div>
                <div className="player-form-column">
                    <TextField label='Image' placeholder='Write image url' mandatory={true} value={image} onChange={value => setImage(value)}></TextField>
                    <DropDownList label='Team' list={teams} mandatory={true} value={team} onChange={value => setTeam(value)}></DropDownList>
                </div>
                <div className="player-form-button">
                    <Button>Create card</Button>
                </div>
            </form>
        </section>
    )
}

export default Form