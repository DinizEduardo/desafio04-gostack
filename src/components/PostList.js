import React, { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Moquidesia Toledo',
          avatar: 'https://i.pravatar.cc/150?img=1'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Julio da Silva',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            content: 'Acredito que esteja.'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Julio da Silva',
          avatar: 'https://i.pravatar.cc/150?img=11'
        },
        date: '04 Jun 2019',
        content: 'Meu deus será que isso está funcionando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Moquidesia Toledo',
              avatar: 'https://i.pravatar.cc/150?img=1'
            },
            content: 'Meu deus realmente está funcionando'
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="postList">
        {this.state.posts.map(post => (
          <PostItem key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
