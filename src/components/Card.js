import React from "react";

//function to return the card format for the data
function Card(props){

    //console.log(props);

    return (
        <div className="Card">
            {/* return props data */}
            <h1>Nasa Photo Of the Day</h1>
            <hr></hr>
            <h2>Photo: {props.title}</h2>
            <img src={props.imgSrc} alt={props.title}/>
            <h2>Today's Photo: {props.date}</h2>
            <p>{props.explanation}</p>
            <p>Copyright: {props.copyright}</p>
            <hr></hr>
            <br></br>
        </div>
    );
}   

//console.log(Card);

export default Card;