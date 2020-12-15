const axios = require('axios')
module.exports = {

    getDataNASA: async(req) => {
        return await axios.get(`https://api.nasa.gov/planetary/apod?api_key=Nubzd5gkAGpNxQMNM07XKBKdxrsddy9pNDk2geFm&date=${req}`)
            .then(data => data)
            .catch(err => { console.log(err); return err })

    },

    getRandomSpoonacular: async() => {
        return await axios.get(`https://api.spoonacular.com/recipes/random?number=12&apiKey=0ee5f89c8bb54cfe9dc6fa23c96f8e1f`)
            .then(data => data)
            .catch(err => { console.log(err); return err })

    },

    getRecipeSpoonacular: async(req) => {
        return await axios.get(`https://api.spoonacular.com/recipes/${req}/information?includeNutrition=true&apiKey=0ee5f89c8bb54cfe9dc6fa23c96f8e1f`)
            .then(data => data)
            .catch(err => { console.log(err); return err })

    },

    getIngredientsSpoonacular: async(req) => {
        return await axios.get(`https://api.spoonacular.com/food/ingredients/search?query=${req}&number=12&apiKey=0ee5f89c8bb54cfe9dc6fa23c96f8e1f`)
            .then(data => data)
            .catch(err => { console.log(err); return err })

    },

    getIngredientSpoonacular: async(req) => {
        return await axios.get(`https://api.spoonacular.com/food/ingredients/${req}/information?amount=1&apiKey=0ee5f89c8bb54cfe9dc6fa23c96f8e1f`)
            .then(data => data)
            .catch(err => { console.log(err); return err })

    },

    getRecipeQuerySpoonacular: async(req) => {
        return await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${req}&number=12&apiKey=0ee5f89c8bb54cfe9dc6fa23c96f8e1f`)
            .then(data => data)
            .catch(err => { console.log(err); return err })

    },

    getRecipesSpoonacular: async(req) => {
        return await axios.get(`https://api.spoonacular.com/recipes/informationBulk?apiKey=0ee5f89c8bb54cfe9dc6fa23c96f8e1f&ids=${req}`)
            .then(data => data)
            .catch(err => { console.log(err); return err })

    },

    getSimilarSpoonacular: async(req) => {
        return await axios.get(`https://api.spoonacular.com/recipes/${req}/similar?number=12&apiKey=0ee5f89c8bb54cfe9dc6fa23c96f8e1f`)
            .then(data => data)
            .catch(err => { console.log(err); return err })

    },

    getBusquedaEdaman: async(req) => {
        return await axios.get(`https://api.edamam.com/search?q=${req}&app_id=6a83a834&app_key=5582eec5eb9c6421373372c355cacc45&from=0&to=12`)
            .then(data => data)
            .catch(err => { console.log(err); return err })

    },

    getRecipeEdamam: async(req) => {
        return await axios.get(`https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${req}&app_id=6a83a834&app_key=5582eec5eb9c6421373372c355cacc45`)
            .then(data => data)
            .catch(err => { console.log(err); return err })

    },

    getBusqueda2Edaman: async(req) => {
        return await axios.get(`https://api.edamam.com/api/food-database/v2/parser?ingr=${req}&app_id=45eeb26b&app_key=decdabb4cf98db554757d037ff65b554`)
            .then(data => data)
            .catch(err => { console.log(err); return err })

    },
}