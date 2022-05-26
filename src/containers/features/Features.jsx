import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Data Integration',
    text: 'Solve the Extract & Load stage of ELT by bringing data from disparate sources together to provide a unified view.',
  },
  {
    title: 'Data Warehousing',
    text: 'Centralize all of your marketing data into a Single Source of Truth Data Warehouse.',
  },
  {
    title: 'Dashboarding',
    text: 'Connect any and all marketing data sources to your dashboard. Let your marketers focus on the analysis.',
  },
  {
    title: 'Automation',
    text: 'Automated ETL platform, marketing teams can build reports with data that would be hard to gather manually.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Business Intelligence <br /> & Data Consulting</h1>
      <p>Tell Us About Your Project!</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
