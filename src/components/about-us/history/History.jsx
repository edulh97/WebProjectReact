import './history.css';
import React, { useState, useEffect } from 'react';

const History = () => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const revealContent = () => {
      const historyContainer = document.querySelector('.history-container');
      if (historyContainer) {
        const rect = historyContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < windowHeight * 0.75) {
          setRevealed(true);
        }
      }
    };

    window.addEventListener('scroll', revealContent);

    return () => {
      window.removeEventListener('scroll', revealContent);
    };
  }, []);

  return (
    <div className={`history-container ${revealed ? 'reveal' : ''}`}>
      <div className={revealed ? 'reveal' : ''}>
        <h1>History</h1>
        <h2>Paris. 1927</h2>
      </div>
      <div className={`history-image-container ${revealed ? 'reveal' : ''}`}>
        <img src="src/images/origin-company.jpg" alt="history" className='history-image' />
        <p>Against the backdrop of post-war reconstruction, he saw an opportunity to expand his business and contribute to the revitalization of the city. His unique designs and commitment to sustainability made him a prominent name in the Paris art and business scene, proving that creativity can flourish even in times of adversity.</p>
      </div>
    </div>
  );
};

export default History;