import React from 'react';
import "./article.css";

const Article = props => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <p>{props.summary}</p>
                <a href={props.url} target="_blank">Link</a>
                <p>From: {props.source}</p>
            </div>

        </div>
    )
}

export default Article;