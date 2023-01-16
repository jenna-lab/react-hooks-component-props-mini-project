import React from "react";

const Article = ({time,title,preview,date}) =>{

    return (
        <article>
            <h3>{title}</h3>
            <small>{date || "January 1, 1970"}. {time}</small>
            <p>{preview}</p>
        </article>
    )
}
export default Article;