import React from 'react';
import { useHistory } from 'react-router';
import   './Team.css'

const Team = (props) => {
    const{strTeam,strSport,strTeamBadge,idTeam} = props.team;
    // console.log(props.idTeam)
    
    const history = useHistory();
    const handleClick = (teamId) => {
        // console.log(teamId)
        history.push(`/team/${teamId}`)
    }
    const teamStyle ={

        border: '1px solid black',
        margin: '10px',
        borderRadius:'5px',
        padding: '10px',
        width:'270px',
        height:'290px'

    }
    return (
        <div>
           
        <div style={teamStyle} className="teamStyle"> 
            
            <img src={strTeamBadge} alt=""></img>
            <h3>{strTeam}</h3>
            <p>Sport Type:{strSport}</p>
            <button onClick={() => handleClick(idTeam)}> Click Me </button>
           
        </div>
        </div>
    );
};

export default Team;