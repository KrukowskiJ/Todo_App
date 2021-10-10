import "../style/progress_bar.scss"
import React, { useState } from 'react';

function ProgressBar(props){
    
     
      return (
        <div className="container">
          <h1>Your progress bar!</h1>
          <div className="progressbar-container">
            <div className="progressbar-complete" style={{width: `${props.progress}%`}}>
              <div className="progressbar-liquid"></div>
            </div>
            <span className="progress">{props.progress ? props.progress : 0} %</span>
          </div>
        </div>
      )
  }
  
  export default ProgressBar;
  