import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">We do a lot, <br /> Learn all about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Dec 25, 2021" text="The Modern Marketing Data Stack" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="May 01, 2022" text="Project #1" />
        <Article imgUrl={blog03} date="May 01, 2022" text="Project #2" />
        <Article imgUrl={blog04} date="May 01, 2022" text="Project #3" />
        <Article imgUrl={blog05} date="May 01, 2022" text="Project #4" />
      </div>
    </div>
  </div>
);

export default Blog;
