import React, { Component } from 'react';

class PostItem extends Component {
  render() {
    return (
      <div className="postList">
        <div className="postItem">
          <div className="profilePost">
            <img src="https://i.pravatar.cc/150?img=11" className="avatar" />
            <div className="userInfo">
              <h3>Júlio Alcantara</h3>
              <p>04 Jun 2019</p>
            </div>
          </div>

          <div className="content">
            <p>Pessoal, alguém sabe se a Rocketseat está contratando?</p>
          </div>

          <div className="commentList">
            <div className="commentItem">
              <img src="https://i.pravatar.cc/150?img=11" className="avatar" />
              <p>
                <a href="#">Diego Fernandes </a>A Rocketseat está sempre em
                busca de novos membros.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostItem;
