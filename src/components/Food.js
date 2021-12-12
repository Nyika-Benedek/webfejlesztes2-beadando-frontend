import { FaTimes, FaRegStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Food = ({food, onDelete}) => {
    return (
        <div className="food">
            <h3>
                {food.name}
                <FaTimes style={{color: 'red', cursor: 'pointer'}} 
                onClick={() => onDelete(food.id)}/>
            </h3>
            <p> {food.description} </p>
            <p> {food.cost} - Ft</p>
            <p> {food.rating}<FaRegStar style={{color: 'gold'}}/></p>
            <Link to={`/foods/${food.id}`}>Edit</Link>

        </div>
    )
}

export default Food
