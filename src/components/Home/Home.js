import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css'

const Home = () => {
    const [teams,setTeams] = useState([]);
    useEffect(() => {

        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams))
        
    },[])

    const homeStyle = {

        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gridGap:"irem"

    }
    
    return (
        <div>
            <div class="homeDesign">
                
            </div>
        <div style={homeStyle}>
            
            
          
          {
             teams && teams.map(team => <Team team={team}></Team>)
          }
         
        </div>
        </div>
    );
};

export default Home;