import React from 'react';
import './PicCard.css';

const PicCard = ({ photo}) => {
  console.log('hello from pic-card', photo);

  return (
    <div className='pic-card'>
          <img src={photo.smallpic}    />
    </div>
  );
};

export default PicCard;
