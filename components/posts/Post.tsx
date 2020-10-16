import React from "react";
import PropTypes from "prop-types";
import { Button, Jumbotron } from "react-bootstrap";

const Post = ({ title, children }) => {
  return (
    <div className="px-3">
      <Jumbotron>
        <h1>{title}</h1>
        <p>{children}</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Post;
