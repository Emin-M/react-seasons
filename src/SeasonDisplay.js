import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
    winter: {
        txt: "Burr,It's chilly",
        hrf: "r",
        icon: "snowflake"
    },
    summer: {
        txt: "Let's hit the bitch",
        hrf: "s",
        icon: "sun"
    }
}

const getSeason = (lat,month) => {
    if(month > 2 && month < 9){
        return lat>0 ? 'summer' : 'winter';
    }else{
        return lat>0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat,new Date().getMonth());
    const {hrf,txt,icon} = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
        <i className={`i-l fa${hrf} fa-${icon} fa-5x`} />
        <h1>{txt}</h1>
        <i className={`i-r fa${hrf} fa-${icon} fa-5x`} />
        </div>
    )
}

export default SeasonDisplay;