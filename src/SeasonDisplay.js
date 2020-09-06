import React from 'react';

const getSeason = (latitude,month) => {
    const hemisphere = latitude > 0 ? 'N' : 'S';
    if(month > 2 && month < 9) {
        return hemisphere === 'N' ? 'Summer' : 'Winter';
    } else {
        return hemisphere === 'S' ? 'Winter' : 'Summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude,new Date().getMonth());
    return (
        <div>
            Season: {season}
        </div>
    );
};

export default SeasonDisplay;