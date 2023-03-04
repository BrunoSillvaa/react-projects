import './Actions.css'
import { FaPlus, FaMinus, FaPencilAlt, FaTrash } from 'react-icons/fa'
import { useContext } from 'react'
import { NoteManagerContext } from '../../context/NoteManagerContext'

export default function Actions() {
    const {visibility, setVisibility} = useContext(NoteManagerContext)

    return (
        <div className="actions">
            <button className='create' onClick={() => {setVisibility(!visibility)}}>
                {visibility ? <FaMinus className='icon' /> : <FaPlus className='icon' />}
            </button>

            <button className="edit">
                <FaPencilAlt className='icon disabled'/>
            </button>

            <button className="delete">
                <FaTrash className='icon disabled'/>
            </button>
        </div>
    )
}