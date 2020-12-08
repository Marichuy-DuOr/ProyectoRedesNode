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
}