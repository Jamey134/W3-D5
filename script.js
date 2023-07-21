const recipe1 = {
    "organic fat": 99,
    "broccoli seeds": 1,
    okra: 1,
    potato: 1,
    spicy: 5,
    "gourmet memes": 4200,
};

const available1 = {
    "organic fat": 990,
    "broccoli seeds": 1,
    okra: 10,
    potato: 10,
    spicy: 50,
    "gourmet memes": 42000,
    sugar: 9001,
    spice: 5,
    "everything nice": 1,
    "triple point water": 5,
};
const expected1 = 1;
// because only 1 broccoli seeds is available and that is the limiting ingredient

// same as available1, except broccoli seeds has 10.
const available2 = { ...available1, ["broccoli seeds"]: 10 };
const expected2 = 10;

// same as available1 except broccoli seeds key is deleted.
const available3 = { ...available1 };
delete available3["broccoli seeds"];
const expected3 = 0; // broccoli seeds key doesn't exist in available ingredients

/**
 * Determines how many servings can be made of the given recipe.
 * - Time: O(?).
 * - Space: O(?).
 * @typedef {string} IngredientName
 * @typedef {number} Quantity
 * @typedef {Object<IngredientName, Quantity>} Ingredients
 * @param {Ingredients} recipe
 * @param {Ingredients} available
 * @returns {number} Max servings of the recipe that can be made.
 */



function getMaxServings(recipe, available) {
    
    let maxServings = 1000;
    for (const ingredient in recipe) {
        if (!available.hasOwnProperty(ingredient))
        return 0
    
        const requiredQuanity = recipe[ingredient]

        const availableQuanity = available[ingredient]

        const servingsWithIngredients = availableQuanity / requiredQuanity
        if(servingsWithIngredients < maxServings){
            maxServings = servingsWithIngredients
        }
    }

    return maxServings
    
}
console.log(getMaxServings(recipe1, available1));
console.log(getMaxServings(recipe1, available2))


// ********************Alternative Answer****************************************
// const howManyRecipes = ( recipe, available ) => {

//     const receipeKeys = Object.keys(recipe);

//     const availableKeys = Object.keys(available);

//     let servings = [];

//     for ( index in receipeKeys ) {

//         if ( availableKeys.indexOf(receipeKeys[index]) === -1 ) {

//             return 0;

//         }

//         servings.push(Math.floor( available[receipeKeys[index]]/recipe[receipeKeys[index]]));

//     }

//     let minServings = servings[0];

//     for ( index in servings ) {

//         if (servings[index] < minServings) {

//             minServings = servings[index];

//         }

//     }

//     return minServings;

// };


/*****************************************************************************/