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
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor tempor purus sed pellentesque. Ut egestas porta leo, sed tristique leo gravida vel.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Julio da Silva',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Moquidesia Toledo',
              avatar: 'https://i.pravatar.cc/150?img=1'
            },
            content:
              'Morbi risus lacus, placerat ac tincidunt id, tempor quis felis. Aenean nec enim felis. Nulla quis mi eget risus pulvinar faucibus vel vitae felis'
          },
          {
            id: 2,
            author: {
              name: 'Moquidesia Toledo',
              avatar: 'https://i.pravatar.cc/150?img=1'
            },
            content:
              'Duis euismod ullamcorper purus, a luctus lacus dignissim et. Ut pellentesque viverra nibh. Nulla non mauris est. Integer fermentum neque id nibh cursus,'
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
