const router = require("express").Router();
const articlesController = require("../controllers/articlesController");
const axios = require("axios");
require('dotenv').config();
const keys = require("../keys.js");

router
  .get("/api/articles",(req,res,next)=>{
    articlesController.findAll((err,docs) => {
      if(err) throw err;
      res.json(docs)
    })
  })
  .post("/api/articles",(req,res,next)=>{
    console.log(req.body)
    articlesController.create(req.body)
  })
  .delete("/api/articles/:id", (req,res,next)=>{
      articlesController.remove()
  })
  .get("/nyt/:q", (req,res,next)=>{
    const queryArray = req.params.q.split("&")
    axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
        "api-key": keys.nyt.api_key,
        "q": queryArray[0],
        "begin_date": queryArray[1],
        "end_date": queryArray[2]
      }
    })
    .then(function(response) {
      res.json(response.data.response.docs)
    })
    .catch(function (error) {
      console.log(error);
    });
  })

router.get((req,res,next)=>{
  res.sendStatus(404)})

module.exports = router;