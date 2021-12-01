import React from 'react'
import  PropTypes  from 'prop-types';


function PersonComponent(props) {



        return(
            <div>
               <div>
                   {props.children}
                  <div  className="box6"><h1>{props.fullName}</h1></div> 
                   
                   <div className="box8">
                   <h2 className="box7">{props.bio}</h2>
                   <h2 className="box7">{props.profession}</h2> 
                   </div>
               </div>
               </div>
        )
}
 /*
  PersonComponent.defaultProps={
    fullName: "Belbekri Souhail"
  }
  */



  
  PersonComponent.propTypes = {
    fullName: PropTypes.string, 
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.string
  };

  export default PersonComponent