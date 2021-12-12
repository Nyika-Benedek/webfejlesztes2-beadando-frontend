import { Link, useParams } from "react-router-dom"
import { useState } from 'react'


const Edit = ({editFood, foods}) => {

    const params = useParams()
    const foodId=Number(params.id)
    const food = foods.find(other => other.id === foodId)
    const [name, setName] = useState(food.name)
    const [description, setDescription] = useState(food.description)
    const [cost, setCost] = useState(food.cost)
    const [rating, setRating] = useState(food.rating)
    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please add a food name!')
            return
        }
        editFood(foodId, { name, description, cost, rating})
    }

    return (
        <div>
            <Link to="/">Go Back</Link>
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
            <label>name </label>
            <input type = 'text' placeholder='Add name' value={name} onChange={(e) => {setName(e.target.value)}}/>
            </div>  

            <div className="form-control">
            <label>description </label>
            <input type = 'text' placeholder='Add description' value={description} onChange={(e) => {setDescription(e.target.value)}}/>
            </div>  

            <div className="form-control">
            <label>cost </label>
            <input type = 'number' placeholder='Add cost' value={cost} onChange={(e) => {setCost(e.target.value)}}/>
            </div>  
            <div className="form-control">
            <label>rating </label>
            <input type = 'number' placeholder='Add rating' value={rating} onChange={(e) => {setRating(e.target.value)}}/>
            </div> 

            <input className="btn btn-block" type = 'submit' value= 'Save Food'/> 
        </form>
        </div>
    )
}

export default Edit
