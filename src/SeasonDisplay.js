import React from 'react';

import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: 'Brrr, its chilly outside',
        iconName: 'snowflake'
    }
}

const getSeason = (latitude,month) => {
    const hemisphere = latitude > 0 ? 'N' : 'S';
    if(month > 2 && month < 9) {
        return hemisphere === 'N' ? 'summer' : 'winter';
    } else {
        return hemisphere === 'S' ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude,new Date().getMonth());
    // Destructuring...
    const { text, iconName } = seasonConfig[season];
    // ...
    return (
            <div className={`season-display ${season}`}>
                <i className={`icon-left massive ${iconName} icon`} />
                <h1>{text}</h1>
                <i className={`icon-right massive ${iconName} icon`} />
            </div>
    )
};

export default SeasonDisplay;