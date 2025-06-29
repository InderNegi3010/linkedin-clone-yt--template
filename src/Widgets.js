import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className='widgets__article'>
        <div className='widgets__articleLeft'>
          <FiberManualRecordIcon />
        </div>

        <div className='widgets__articleRight'>
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle('Inder Singh Negi is back', 'Top news - 9909 readers')}
      {newsArticle('React 19 released', 'Trending in web dev')}
      {newsArticle('AI is taking over', 'Tech - 12k readers')}
      {newsArticle('Jobs in 2025', 'Career - 4.5k readers')}
      {newsArticle('How to use Tailwind', 'Frontend - 8.2k readers')}
    </div>
  );
}

export default Widgets;
