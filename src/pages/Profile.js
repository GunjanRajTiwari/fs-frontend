import React from "react";
import colors from "../config/colors";


export const Profile = () => {
    return (
        <div className="profile" style={styles.profile}>  
            <div className="basics" style={styles.basics}>
                <div className="info" style={styles.info}>
                    <h3> Sandesh Dhungana</h3>
                    <h5> Rating: 1655 </h5>
                </div>
                <div className="pic">
                    <img src="https://avatars.githubusercontent.com/u/61199672?s=400&u=e980cefc382530c31e95c18f86ef55ae0f8c6341&v=4" style={styles.pic} alt="" />
                </div>
            </div>
            <div className="history">
                <h3>Contest History</h3>
                <ul>
                    <li>Google Codejam</li>
                    <li>FourSpace Weekly</li>
                    <li>FourSpace H4C</li>
                </ul>
            </div>
        </div>
    );
};

const styles = {
    profile:{
        padding: "1em",
        height: "100vh",
        backgroundColor: colors.primary,
        color: "white"
    },
    basics : {
        display: "flex",
        alignItems: "space-around"
    },
    pic:{
        border: "2px solid white",
        borderRadius: "50%",
        width: "20em",
        height: "20em"
    }
};