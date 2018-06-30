const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  );

const articleSeed = [
{
    title: "Letter of Recommendation: Asteroid Day",
    source: "The New York Times",
    url: "https://www.nytimes.com/2018/06/20/magazine/letter-of-recommendation-asteroid-day.html",
    summary: "It is the one holiday that grants permission to indulge in a spectacle of imagined global catastrophe.",
    date: "2018-06-20T09:00:01+0000"
},
]

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedCount + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });