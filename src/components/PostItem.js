import React, { Component } from 'react';

function PostItem({ data }) {
  console.log(data);
  return (
    <div className="postItem">
      <div className="profilePost">
        <img src={data.author.avatar} className="avatar" />
        <div className="userInfo">
          <h3>{data.author.name}</h3>
          <p>{data.date}</p>
        </div>
      </div>
      <div className="content">
        <p>{data.content}</p>
      </div>

      <div className="commentList">
        {data.comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

function CommentItem({ comment }) {
  return (
    <div className="commentItem">
      <img src={comment.author.avatar} className="avatar" />
      <p>
        <a href="#">{comment.author.name} </a>
        {comment.content}
      </p>
    </div>
  );
}

export default PostItem;
