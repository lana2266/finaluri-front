// document.addEventListener("DOMContentLoaded", function() {

//     document.getElementById("menuButton").addEventListener("click", function() {
//         window.location.href = "menu.html";
//     });
// });


const apiKey = '0e038ff2563e4d47a5854073fba118b9'; // Replace with your actual API key
const apiUrl = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`;

async function fetchRecipes() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`); // Corrected string interpolation
        }
        const data = await response.json();
        displayRecipes(data.recipes);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        document.getElementById('recipes-container').innerHTML = `<p>Failed to load recipes. Please try again.</p>`; // Fixed HTML string
    }
}

function displayRecipes(recipes) {
    const container = document.getElementById('recipes-container');
    container.innerHTML = ''; // Clear any existing content

    recipes.forEach(recipe => {
        const recipeCard = `
            <div class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
            </div>
        `;
        container.innerHTML += recipeCard; // Append the recipe card to the container
    });
}

// Call the function when the page loads
fetchRecipes();

