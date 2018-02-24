import React from 'react';

const Notfound = () => (
  <div className="notfound">
    <div className="notfound-container">
      <img src={require( '../assests/man-on-toilet.svg' )}  alt="Man sitting on the toilet wondering about his stool" />
      <h2>Thinking about your stool?</h2>
      <h3>Error 404: Page Not Found</h3>
      <p>Click on the <strong>title</strong> to find out what your stool means!</p>
    </div>
  </div>
);

export default Notfound;