import React from "react";

// hs002 receive the list of comments
const CommentList = ({ comments }) => {

  // hs002 delete this stuff
  

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
