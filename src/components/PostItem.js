import React, { Component } from 'react';

function PostItem({ data }) {
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
        <div className="commentItem">
          <img src="https://i.pravatar.cc/150?img=11" className="avatar" />
          <p>
            <a href="#">Diego Fernandes </a>A Rocketseat está sempre em busca de
            novos membros.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
