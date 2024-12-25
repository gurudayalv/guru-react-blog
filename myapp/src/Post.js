import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const mediumLinks = {
    1: 'https://medium.com/@gurudayalv05/let-us-connect-computers-to-nature-in-my-way-f31d17d6b7f5',
    2: 'https://medium.com/@gurudayalv05/where-i-left-my-magic-6aba09e0d0de',
    3: 'https://medium.com/@gurudayalv05/a-world-where-the-true-me-takes-me-d18b12d1ee12',
  };

  const mediumLink = mediumLinks[id]; // Get the Medium link for the post ID

  return (
    <div className="post">
      {/* <h2>Post {id}</h2> */}
      <p>{id} Welcome User. Click below to read medium article. </p>
      <a
          href={mediumLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.5em',
            border: '2px solid grey',
            padding: '10px',
            borderRadius: '5px',
            display: 'inline-block',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'green';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          Go to Medium Article
        </a>
    </div>
  );
};

export default Post;
