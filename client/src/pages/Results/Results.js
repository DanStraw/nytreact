import React, { Component } from 'react';
import Header from "../../components/Header/Header.js";
import API from "../../utils/API";
import Article from '../../components/Article/Article.js';
import SaveBtn from '../../components/SaveBtn/SaveBtn';
import "../../components/Article/article.css";
import { Link } from 'react-router-dom';

class Results extends Component {
    state = {
        articles: []
    }
    componentDidMount() {
        this.searchNYT(this.props.match.params.q)
    }
    searchNYT = (query) => {
        API.scrapeNYT(query)
            .then(res=>{
                const articles = res.data;

                const topFive = [];
                articles.map((article, index)=>{
                    switch(index) {
                        case 0: case 1: case 2: case 3: case 4:
                            topFive.push(article)
                            break;
                        default:
                            break;
                    }
                })
                this.setState({ articles: topFive })
            })
    }
    componentDidUpdate() {
        console.log(this.state.articles);
    }
    saveToDb = i => {
        const article = this.state.articles[i]
        const articleObject = {
            title: article.headline.main,
            source: article.source,
            url: article.web_url,
            summary: article.snippet,
            date: article.pub_date
        }
        API.saveArticle(articleObject)
    }
        
    

    render() {
        return (
            <div>
                <Header headerText="Search Results" />
                <div className="navBar">
                    <Link to="/"><div>Home</div></Link>
                    <Link to="/saved">Saved</Link>
                </div>
                <div>
                    {this.state.articles.map((article, index)=> {
                        return (
                        <div id={index} key={article._id} className="article-div" style={{ justifyContent: "center" }}>
                            <Article title={article.headline.main} 
                                summary={article.snippet}
                                url={article.web_url}
                                source={article.source}
                                />
                            <div onClick={() => this.saveToDb(index)}>
                                <SaveBtn />
                            </div>
                        </div>  
                    )})}   
                </div>
            </div>
        )
    }
}

export default Results;