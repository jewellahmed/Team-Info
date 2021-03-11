import React from 'react';
import Image from '../../Image/male.png'
import Image2 from '../../Image/female.png'



const TeamImage = (props) => {
    const {strGender} = props.team;
    //console.log(strGender)
    let greeting;
   
        if(strGender){
               greeting = Image;  
           }

        else{

            greeting = Image2;
        }

    return (
        <div>
            
            <img src={greeting} className="imageStyle" alt=""/>
            
        </div>
    );
};

export default TeamImage;