const mealApi = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedMeal}`;

// Fetch meal data
function getMeal() {
    const mealId = document.querySelector('#meal-select').value;
    const mealApi = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    
    fetch(mealApi)
      .then(response => response.json())
      .then(data => {
        const mealList = document.getElementById("meal-list");
        const meal = data.meals[0];
        
        // clear previous content
        mealList.innerHTML = '';
  
        // create and append meal details
        const mealName = document.createElement("h2");
        mealName.textContent = meal.strMeal;
        mealList.appendChild(mealName);
        
        const mealImage = document.createElement("img");
        mealImage.src = meal.strMealThumb;
        mealList.appendChild(mealImage);
        
        const ingredients = document.createElement("ul");
        ingredients.classList.add("ingredients");
        for (let i = 1; i <= 20; i++) {
          const ingredient = meal[`strIngredient${i}`];
          const measure = meal[`strMeasure${i}`];
          if (ingredient && measure) {
            const ingredientItem = document.createElement("li");
            ingredientItem.textContent = `${ingredient} - ${measure}`;
            ingredients.appendChild(ingredientItem);
          }
        }
        mealList.appendChild(ingredients);
        
        const instructions = document.createElement("ol");
        instructions.classList.add("instructions");
        for (let i = 1; i <= 20; i++) {
          const instruction = meal[`strInstructions${i}`];
          if (instruction) {
            const instructionItem = document.createElement("li");
            instructionItem.textContent = instruction;
            instructions.appendChild(instructionItem);
          }
        }
        mealList.appendChild(instructions);
      })
      .catch(error => {
        console.log(error);
      });
  }