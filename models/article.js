const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: { type: String, required: true },
    source: { type: String, required: true },
    url: { type: String, required: true },
    summary: { type: String },
    date: { type: String }
})

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;