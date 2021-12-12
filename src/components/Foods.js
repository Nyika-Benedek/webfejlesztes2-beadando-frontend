import Food from "./Food"

export const Foods = ({food, onDelete}) => {

    return (
        <>
            {food.map( (food) => (
                <Food key = {food.id} food = {food} onDelete = {onDelete} />
            ))}
        </>
    )
}

export default Foods
