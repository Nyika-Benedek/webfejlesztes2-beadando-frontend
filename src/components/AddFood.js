import { useState } from "react"

const AddFood = ({onAdd}) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [cost, setCost] = useState(0)
    const [rating, setRating] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert('Please add a food')
            return
        }

        onAdd({ name, description, cost, rating})

        setName('')
        setDescription('')
        setCost(0)
        setRating(0)
        
    }

    return (
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
    )
}

export default AddFood
