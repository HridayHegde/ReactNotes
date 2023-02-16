import React from "react";

import "./Widgets.css";

import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('React is working', 'Top news - 800000 readers')}
      {newsArticle('React is nice', 'Top news - 400 readers')}
      {newsArticle('Redux works?', 'Top news - 800 readers')}
      {newsArticle('React is working', 'Top news - 800000 readers')}
    </div>
  );
};

export default Widgets;
