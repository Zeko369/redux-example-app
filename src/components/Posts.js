import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.myPost) {
      this.props.posts.unshift(nextProps.myPost);
    }
  }

  render() {
    const { posts } = this.props;

    const postsJsx = posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {/* {myPost && (
          <div>
            <h2>{myPost.title}</h2>
            <p>{myPost.body}</p>
          </div>
        )} */}
        {postsJsx}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  myPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  myPost: state.posts.item
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
