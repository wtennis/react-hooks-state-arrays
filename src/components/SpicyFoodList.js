import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood, newSpicyFoods } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      console.log("all filtered")
      return true;
    } else {
      console.log(filterBy)
      return food.cuisine === filterBy;
    }
  });

  // const allFoodsArr = [...spicyFoods, ...newSpicyFoods]

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood]
                if (newFood !== undefined) {
                  // let allFoodsArr = [...newFoodArray]
                  // console.log(allFoodsArr)
                  setFoods(newFoodArray)
                  
                } else {
                }
  }

  function handleLiClick(id) {
    const updatedHeatLevelArray = foods.map((food) => {
      if (food.id === id) {
        return {...food,
              heatLevel: food.heatLevel +1,
        };
      } else {
        return food;
      }
    }
    )
    setFoods(updatedHeatLevelArray)
  }

  let foodList = foodsToDisplay.map((food) => { 
  return (
    <li key = {food.id} onClick={() => handleLiClick(food.id)}><b>{food.name}</b> | Cuisine: {food.cuisine} | Heat level: {food.heatLevel}</li>
  )
  })

  // const [filter, setFilter] = useState('All')

  function handleFilter(selected) {
    // console.log(`Selected:` + selected)
    // console.log(`Current foods state:` + foods)
    // takes argument of filter value,
    //create allFoodsArr
    setFilterBy(selected)
    
    }
    //if filter value = All, setFoods(allFoodsArr) 
    //if filter value = foodType, filter and return filteredFoodArr
    //setFoods(filteredFoodArr)
  

  return (
    <div>
      <select onChange={e => handleFilter(e.target.value)} name="filter">
          <option value="All">All</option>
          <option value="American">American</option>
          <option value="Sichuan">Sichuan</option>
          <option value="Thai">Thai</option>
          <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
