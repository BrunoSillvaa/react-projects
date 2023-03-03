import './Actions.css'
import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa'

export default function Actions() {
    return (
        <div className="actions">
            <button className='create'>
                <FaPlus className='icon' />
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