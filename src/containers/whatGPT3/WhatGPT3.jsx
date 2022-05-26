import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your wildest imagination...</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Design" text="I am a Data professional who has taken his love of art and design and built a business around art and design solutions that solve problems while serving as an aesthetic enhancement to the client." />
      <Feature title="Marketing" text="As consultants, we assess the current state of your marketing efforts, plan and execute marketing campaigns, and provide ongoing training for marketers to improve campaign performance." />
      <Feature title="Data" text="We offer a range of data integration, data transformation, data warehousing, dashboarding, machine learning, automation, and data-related consulting services." />
    </div>
  </div>
);

export default WhatGPT3;
