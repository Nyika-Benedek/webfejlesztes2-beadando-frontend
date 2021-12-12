import {useState, useEffect} from 'react'
import Header from "./components/Header";
import Foods from "./components/Foods";
import AddFood from './components/AddFood';
import { Footer } from './components/Footer';
import About from './components/About';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Edit from './components/Edit';

function App() {

  const [showAddFood, setShowAddFood] = useState(false) 

  const [food, setFoods] = useState(
    [
    ]
)

useEffect(() => {
  const getFoods = async () => {
    const foodsFromServer = await fetchFoods()
    setFoods(foodsFromServer)
  }

  getFoods()
}, [])

//Fetch Foods
const fetchFoods = async () => {
  const res = await fetch('/foods')
  const data = await res.json()

  return data
}
 
//Fetch Food
const fetchFood = async (id) => {
  const res = await fetch(`/foods${id}`)
  const data = await res.json()

  return data
}

//Add food:
const addFood = async (foods) => {

  const res = await fetch('/foods',  
  {
    method: 'POST',
    headers: {
      'Content-type' : 'application/json'
    },
    body : JSON.stringify(foods)
  })

  const data = await res.json()

  setFoods([...food, data])
  


  //const id = Math.round(Math.random()*10000)+1
  //const newFood = {id, ...foods}
  //setFoods([...food, newFood])
  //console.log(food);
}


//Delete food:
const deleteFood = async (id) => {
  await fetch(`/foods/${id}`,
  {
    method: 'DELETE',
  })

  setFoods(food.filter((food) => food.id !== id))
  console.log('delete', id)
}

  //Edit a food
  const editFood = async(id, {name, description, cost, rating}) => {
    const res = await fetch(`/foods/${id}?name=${name}&description=${description}&cost=${cost}&rating=${rating}`,
      {
        method: 'PUT'
      })
      const data = await res.json()
      setFoods([...food, data])
    setFoods(await fetchFoods());
  }


  return (
    <BrowserRouter>
    <div className="container">
      <Header onAdd={() => setShowAddFood(!showAddFood)} showAdd={showAddFood}/>
      <Routes>
        <Route path='/' exact element={
          <>
            {showAddFood && <AddFood onAdd = {addFood}/>}
            {food.length > 0 ? (
              <Foods food = {food} onDelete = {deleteFood}/>
            ) : (
              "No Food To Show"
            )}

          </>
        }/>
        <Route path = "/foods/:id" element={<Edit editFood={editFood} foods={food}/>}/>
        <Route path = "/about" element={<About/>}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
