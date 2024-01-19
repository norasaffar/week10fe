import React from 'react';
import PicCard from '../picCard/PicCard';
import "./PicContainer.css"


const PicContainer = ({photos}) =>{
    console.log(photos)
    return(
        <div className='pic-container-wrapper'>
        <div className = "pic-container-inner">
             {photos.map((photo) => (
            <PicCard photo={photo} />
             ))}
        </div>



        </div>
    )
} 
 export default PicContainer;