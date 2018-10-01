const jsonData = require('../data.json');
let list = jsonData.mylist;
let recommendations = jsonData.recommendations;

// Get all movies
exports.getAll = (req, res) => {
    res.status(200).json({list: list, recommendations: recommendations});
}

// Add movie into list from recommendations, remove movie from recommendations
exports.addMovie = (req, res) => {
    let id = req.params.id;
    console.log('adding movie to list from recommendations');
    let idx = -1;

    // Check duplicates
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == id) {
            res.status(500).json({error: "The movie already exists in my list."});
            return;
        }
    }
    
    for (let i = 0; i < recommendations.length; i++) {
        if (recommendations[i].id == id) {
            idx = i;
        }
    }
    
    if (idx !== -1) {
        // add recommended movie into list
        list.push(recommendations[idx]);
        // remove selected movie from recommendations
        recommendations.splice(idx, 1);
        res.status(200).json({list: list, recommendations: recommendations});
    } else {
        res.status(500).json({error: "The movie doesn't exist in the recommendations."});
    }
    
}

// Remove movie from list, add movie into recommendations
exports.removeMovie = (req, res) => {
    console.log('deleting movie from list and add the deleted movie into recommendations');
    let id = req.params.id;
    let idx = -1;
    
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == id) {
            idx = i;
        }
    }

    if (idx !== -1) {
        // add recommended movie into list
        recommendations.push(list[idx]);
        // remove selected movie from recommendations
        list.splice(idx, 1);
        res.status(200).json({list: list, recommendations: recommendations});
    } else {
        res.status(500).json({error: "The movie doesn't exist in my list."});
    }
    
}
