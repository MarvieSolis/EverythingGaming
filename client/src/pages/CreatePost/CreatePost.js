import React, { Component } from 'react';
import Navbar from "../../components/Navbar";

import Blog from "../../components/CreatePost/Blog";
import Review from "../../components/CreatePost/Review";
import Walkthrough from "../../components/CreatePost/Walkthrough";


class CreatePost extends Component {

  state = {
    walkthrough: false,
    review: false,
    blog: false
  }

  renderWalkthrough = () => {
    this.setState({ walkthrough: true, review: false, blog: false });
    console.log(this.state);
  };

  renderReview = () => {
    this.setState({ walkthrough: false, review: true, blog: false });
    console.log(this.state);
  };

  renderBlog = () => {
    this.setState({ walkthrough: false, review: false, blog: true });
    console.log(this.state);
  };



  render() {
    return (
      <div>
        <Navbar />

        <div className="container createPost">
          <div className="row justify-content-center">
            <h1 id="createPostHeader">Create a Post</h1>
          </div>
          <div className="row justify-content-center">
            <div className="cols-m-auto">
              <h6 id="createPostIns">What type of post will you be making?</h6>
              <div className="createPostBtnWrapper">
                <button className="categorySelect" onClick={this.renderWalkthrough}>Walkthrough</button>
                <button className="categorySelect ctgsl" onClick={this.renderReview}>Review</button>
                <button className="categorySelect" onClick={this.renderBlog}>Blog</button>
              </div>
            </div>
          </div>
        </div>

        {this.state.walkthrough ? < Walkthrough /> : this.state.review ? < Review /> : this.state.blog ? < Blog /> : null}

      </div>
    );
  }
}

export default CreatePost;