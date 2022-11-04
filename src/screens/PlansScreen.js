import React, { useState } from 'react';
import './PlansScreen.css';

function PlansScreen() {
  return (
    <div className='plansScreen'>
        <div className="plansScreen__plan plansScreen__premium">
            <div className="plansScreen__info">
                <h5>Premium</h5>
                <h6>4k + HDR</h6>
            </div>
            <button>SubScribe</button>
        </div>
        <div className="plansScreen__plan plansScreen__standard">
            <div className="plansScreen__info">
                <h5>Standard</h5>
                <h6>1080p</h6>
            </div>
            <button>SubScribe</button>
        </div>
        <div className="plansScreen__plan plansScreen__free">
            <div className="plansScreen__info">
                <h5>Free-Ad-Supported</h5>
                <h6>720p with Ads</h6>
            </div>
            <button>SubScribe</button>
        </div>
    </div>
  )
}

export default PlansScreen