import { useState } from "react"
import "./Form.css"
import Button from "../Button"
import DropDownList from "../DropDownList"
import InputField from "../InputField"


const Form = ({teams, positions, setNewPlayer, setNewTeam}) => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('#eeeeee');
    const [isCreateTeam, setIsCreateTeam] = useState(false);

    const onSave = (event) => {
        event.preventDefault()
        setNewPlayer({name, position, image, team});
        setName('')
        setPosition('')
        setImage('')
        setTeam('')
    }

    const onSaveTeam = (event) => {
        event.preventDefault()
        setTeamName('')
        setTeamColor('#eeeeee')
        setNewTeam({teamName, teamColor})
    }

    const changeForm = () => {
        setIsCreateTeam(!isCreateTeam)
    }
    
    return (
        <div>
            <div className="show-form-container">
                    <div onClick={changeForm} className={!isCreateTeam ? 'show-form-button active':'show-form-button'}>Create card player</div>
                    <div onClick={changeForm} className={isCreateTeam ? 'show-form-button active':'show-form-button'}>Create team</div>
            </div>
            <section className="form-container">
                { !isCreateTeam ? 
                    <form onSubmit={onSave} className="form-content">
                        <h2 className="form-title">Fill in the form with the player's name, position and image</h2>
                            <InputField label='Name' placeholder='Write name' mandatory={true} value={name} onChange={value => setName(value)}></InputField>
                            <DropDownList label='Position' list={positions} mandatory={true} value={position} onChange={value => setPosition(value)}></DropDownList>
                            <InputField label='Image' placeholder='Write image url' mandatory={true} value={image} onChange={value => setImage(value)}></InputField>
                            <DropDownList label='Team' list={teams} mandatory={true} value={team} onChange={value => setTeam(value)}></DropDownList>
                        <div className="form-button">
                            <Button>Create card</Button>
                        </div>
                    </form>
                :
                    <form onSubmit={onSaveTeam} className="form-content">
                        <h2 className="form-title">Fill the form to create a team</h2>
                            <InputField label='Team name' placeholder='Write team name' mandatory={true} value={teamName} onChange={value => setTeamName(value)}></InputField>
                            <InputField type={'color'} label='Color' value={teamColor} onChange={value => setTeamColor(value)}></InputField> 
                        <div className="form-button">
                            <Button>Create team</Button>
                        </div>
                    </form>
                }
            </section>
        </div>
    )
}

export default Form