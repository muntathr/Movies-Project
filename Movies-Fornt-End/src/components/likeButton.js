import React from 'react';

const LikeButton = () => {
  let b = document.querySelector('button');
  setTimeout(() => b.focus(), 100);
  setTimeout(() => b.blur(), 1000);

  // Return your JSX with SVG and other elements
  return (
    <div className='like-btn' type="button" data-bs-toggle="modal" data-bs-target="#authModal">
      <button className="like-button">
        <div className="like-wrapper">
          <div className="ripple"></div>
          <svg className="heart" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
          </svg>
          <div className="particles" style={{ "--total-particles": 6 }}>
            <div className="particle" style={{ "--i": 1, "--color": "#7642F0" }}></div>
            <div className="particle" style={{ "--i": 2, "--color": "#AFD27F" }}></div>
            <div className="particle" style={{ "--i": 3, "--color": "#DE8F4F" }}></div>
            <div className="particle" style={{ "--i": 4, "--color": "#D0516B" }}></div>
            <div className="particle" style={{ "--i": 5, "--color": "#5686F2" }}></div>
            <div className="particle" style={{ "--i": 6, "--color": "#D53EF3" }}></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default LikeButton;
