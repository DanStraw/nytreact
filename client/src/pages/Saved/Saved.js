import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import API from '../../utils/API';
import Article from "../../components/Article/Article";
import { Link } from 'react-router-dom';
import DeleteBtn from '../../components/DeleteBtn/DeleteBtn';


class Saved extends Component {
    state={
        savedArticles: []
    }

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        API.getArticles()
        .then(res => {
            console.log(res.data)
            this.setState({ savedArticles: res.data })
        }
        
          )
          .catch(err => console.log(err));
    }

    deleteArticle = id => {
        API.deleteArticle(id)
            .then(res => {
                this.setState({ savedArticles: res.data })
            })
    }

    componentDidUpdate() {
        this.loadArticles()
    }

    render() {
        return (
            <div>
                <Header headerText="Saved Articles" />
                <div className="navBar">
                    <Link to="/"><div>Home</div></Link>
                    <Link to="/saved">Saved</Link>
                </div>
                <div>
                    {this.state.savedArticles.map((article, index)=> {
                        return (
                        <div id={index} key={article._id} className="article-div" style={{ justifyContent: "center" }}>
                            <Article title={article.title} 
                                summary={article.summary}
                                url={article.url}
                                source={article.source}
                                />
                            <div onClick={() => this.deleteArticle(article._id)}>
                                <DeleteBtn />
                            </div>
                        </div>  
                    )})}   
                </div>
            </div>
        )
    }
}

export default Saved;