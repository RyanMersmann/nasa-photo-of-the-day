import React, {useState, useEffect} from "react";
import axios from 'axios';
import NasaCard from "./Card";

function NasaData() {
    const [data, setData] = useState("");

    //axios call
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=bupP1wcc7S4HVb7PbaPVczmNsozt1lERYamhA3kD`)
        .then(response => {
            //console.log(response);
            setData(response.data);
        })
    }, []);

    // this section returns the data from the axios call that we will pass into the card
    return (
        <div className="Nasa">
            <NasaCard
                title={data.title}
                imgSrc={data.url}
                date={data.date}
                explanation={data.explanation}
                copyright={data.copyright}
            />
        </div>
    )
}

export default NasaData;



    
    