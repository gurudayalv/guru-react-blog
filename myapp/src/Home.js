import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = [
    { id: 1, title: 'First Article'},
    { id: 2, title: 'Second Article' },
    { id: 3, title: 'Third Article' },
  ];
  return (
    <div className="home">
      <h1>Gurudayal Verma</h1>
      <p>Welcome to My Blog. This is the homepage where you can explore my posts.</p>
      <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
        {posts.map(post => (
          <li key={post.id} style={{ margin: '10px 0' }}>
          <Link
            to={`/post/${post.id}`}
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.2em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid grey',
              padding: '10px',
              borderRadius: '5px',
              transition: 'background-color 0.3s, color 0.3s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'green';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'white';
            }}
          >
            <i className="fas fa-circle" style={{ marginRight: '10px' }}></i>
            {post.title}
          </Link>
        </li>
        //   <li key={post.id} style={{ margin: '10px 0' }}>
        //   <Link to={`/post/${post.id}`} style={{ color: 'grey', textDecoration: 'none', fontSize: '1.2em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        //     <i className="fas fa-circle" style={{ color: 'grey', marginRight: '10px' }}></i>
        //     {post.title}
        //   </Link>
        // </li>
      //   <li key={post.id} style={{ display: 'inline-block', margin: '0 10px' }}>
      //   <Link to={`/post/${post.id}`}>{post.title}</Link>
      // </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
