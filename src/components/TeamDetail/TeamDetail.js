import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamImage from '../TeamImage/TeamImage';
import './TeamDetail.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons'

const TeamDetail = (props) => {
    const {teamId} = useParams();
    const [team,setTeam] = useState({});
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        
        fetch(url)
        
        .then(res => res.json())
        
        .then(data => setTeam(data.teams[0]))
        
        
    },[teamId])
    

    return (
        <div className="badgeStyle">
            
            <div className="badgeStyle">
            <img src={team.strTeamBadge} alt=""/>
            </div>
            
            <div className="moreStyle">
        
        <div className="teamDetail">
             <h1>{team.strTeam}</h1>
             
             <h5>Founded:{team.intFormedYear}</h5>
            <h5>Country:{team.strCountry}</h5>
            <h5>Sport Type:{team.strSport}</h5>
            <h5>Gender:{team.strGender}</h5>
           
           
        </div>
        <div className="teamImage">
            <TeamImage team={team}></TeamImage>

        </div>
        </div>
        <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, repellendus nostrum. Dolorum ea libero quia, id quam commodi, impedit accusantium cupiditate minima maiores consectetur saepe est! Asperiores, cumque incidunt. Delectus.</p>
            <br></br>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem quam, dolorem velit dolorum culpa aut cupiditate repudiandae vel. Nisi accusamus totam dicta hic nihil deserunt. Esse cum enim ad quam!</p>
        </div>
        <div className="socialDesign">
            
            <a href="www.facebook.com/Arsenal"><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="twitter.com/arsenal"><FontAwesomeIcon icon={faTwitter}/></a>
            <a href="www.youtube.com/user/ArsenalTour"><FontAwesomeIcon icon={faYoutube}/></a>
            
            
        </div>
        </div>

       
    );
};

export default TeamDetail;