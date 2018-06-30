const db = require("../models");

module.exports = {
    findAll: function(cb) {
        db.Article.find({}).exec(cb)
    },
    create: function(req, res) {
        db.Article.collection
            .insert(req)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    remove: function(req, res) {
        console.log(req.params)
        db.Article 
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }   
}