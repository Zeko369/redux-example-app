import React, { Component } from "react";
import { connect } from "react-redux";
import { newPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit(event) {
    event.preventDefault();
    const { title, body } = this.state;
    this.props.newPost(title, body);
  }

  render() {
    const { title, body } = this.state;

    return (
      <div>
        <h1>Add post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Body: </label>
            <br />
            <textarea name="body" value={body} onChange={this.onChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { newPost }
)(PostForm);
